"use client";

import EventReg from "@/app/dashboard/_components/EventReg";
import { Modal } from "flowbite-react";

const RegModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: any;
}) => {
  return (
    <div>
      <Modal
        className="mx-auto mt-[100px] md:mt-[150px] border h-[calc(100vh-30vh)] md:h-[500px] rounded-md bg-body max-w-[800px]"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="bg-body">Terms of Service</Modal.Header>
        <Modal.Body className="bg-body mx-auto w-full">
          <EventReg />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RegModal;
