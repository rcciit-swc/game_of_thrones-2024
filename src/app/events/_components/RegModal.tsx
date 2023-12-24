'use client';

import EventReg from '@/app/dashboard/_components/EventReg';
import { Button, Modal  } from 'flowbite-react';


const RegModal = ({openModal , setOpenModal}:{openModal:boolean,setOpenModal:any}) => {
    
    return (
      <div>
        <Modal className='  mx-auto mt-[100px] md:mt-[150px] border rounded-xl bg-body' show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header className='bg-body'>Terms of Service</Modal.Header>
          <Modal.Body  className='bg-body mx-auto w-full'>
            <EventReg />
          </Modal.Body>
         
        </Modal>
       
      </div>
    );
}

export default RegModal