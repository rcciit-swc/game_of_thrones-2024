import { supabase } from "@/lib";
import { getEventType } from "@/utils/functions/getEventType";
import { getImageUrl } from "@/utils/functions/getImageUrl";
import { getRegisteredTeams } from "@/utils/functions/getRegisteredTeams";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface VerificationModalProps {
  modalData: any;
  showModal: boolean;
  setShowModal: any;
  setReigstrations: any;
}

const VerificationModal = ({
  modalData,
  showModal,
  setShowModal,
  setReigstrations,
}: VerificationModalProps) => {
  const [loaded, setLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleAccept = async () => {
    const { error: updateLeadError } = await supabase
      .from("teams")
      .update({ transaction_verified: true })
      .eq("team_id", modalData.team_id);

    if (updateLeadError) {
      toast.error("Error Occured");
      setImageUrl("");
      setShowModal(false);
    } else if (!updateLeadError) {
      // Send email to team lead

      toast.success("Team Verified");
      const data = await getRegisteredTeams();
      setReigstrations(data);
      setImageUrl("");
      setShowModal(false);
      setLoaded(false);
    }
  };

  useEffect(() => {
    setLoaded(false);

    const fetchData = async () => {
      const data = await getImageUrl({
        event_id_param: modalData.event_id,
        image_id_param: modalData.team_id,
      });
      if (data) {
        setImageUrl(data.publicUrl);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50 p-5">
          <div className="w-full rounded-md bg-white p-6 shadow-lg md:w-96 ">
            <div className="flex w-full justify-end">
              <button
                className="mb-5 text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setShowModal(false);
                  setImageUrl("");
                  setLoaded(false);
                }}
              >
                Close
              </button>
            </div>
            {/* Modal content goes here */}
            <div
              className="flex h-96 flex-col items-center gap-2 overflow-y-scroll px-3
            text-left
            "
            >
              <h1 className="text-base font-bold text-black">
                {modalData.transaction_id}
              </h1>
              <h2 className="text-base  text-black">
                <b>Event Name:</b> {modalData.event_name}
              </h2>
              <h2 className="text-base  text-black">
                <b>Team Type:</b>{" "}
                {getEventType(modalData.event_id, modalData.is_team)}
              </h2>
              <h2 className="text-base  text-black">
                <b>Team Name:</b> {modalData.team_name}
              </h2>
              <h2 className="text-base  text-black">
                <b>Team Lead Name:</b> {modalData.name}
              </h2>
              <h2 className="text-base  text-black">
                <b>Team Lead Phone: </b>
                <a
                  href={`tel:${modalData.team_lead_phone}`}
                  className="cursor-pointer text-blue-500 hover:text-blue-600"
                >
                  {modalData.team_lead_phone}
                </a>
              </h2>

              {!loaded && (
                <div className="h-[300px] w-[300px] animate-pulse border-2 border-gray-600 bg-gray-500"></div>
              )}
              <Image
                src={imageUrl}
                alt="Team Image"
                width={300}
                height={300}
                className="border-2 border-gray-600"
                onLoad={() => setLoaded(true)}
              />
            </div>
            <div className="mt-5 flex flex-row items-center justify-center gap-5">
              <button
                className="w-full rounded-md bg-red-400 px-4 py-2 text-white shadow-md hover:bg-red-600"
                onClick={() => {
                  setShowModal(false);
                  setImageUrl("");
                  setLoaded(false);
                }}
              >
                Reject
              </button>
              <button
                className="w-full rounded-md bg-green-400 px-4 py-2 text-white shadow-md hover:bg-green-600"
                onClick={handleAccept}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerificationModal;
