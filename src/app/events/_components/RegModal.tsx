"use client";

import EventReg from "@/app/dashboard/_components/EventReg";
import { Modal } from "flowbite-react";

const RegModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}) => {
  return (
    <div>
      <Modal
        className="mx-auto mt-[100px] h-[calc(100vh-30vh)] max-w-[800px] rounded-md border bg-body md:mt-[150px] md:h-[500px]"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="bg-body">Terms of Service</Modal.Header>
        <Modal.Body className="mx-auto w-full bg-body">
          <EventReg />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RegModal;
