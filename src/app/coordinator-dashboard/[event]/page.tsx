"use client";
import { SectionHeader } from '@/components';
import { events } from '@/utils';
import { getRegisteredTeams } from '@/utils/functions/getRegisteredTeams';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Table from '../_components/Table';

const Page = () => {
  let params = useParams();


  const [registrationData, setRegistrationData] = useState<any[]>([]);

  const eventName = events.find((event) => event.id === params.event)?.title;

  useEffect(() => {
    const getRegistrations = async () => {
      const registrationData = await getRegisteredTeams({
        event_id_param: params.event as string,
      });
      setRegistrationData(registrationData!);
    };

    if (params.event) {
        getRegistrations();
    }
    else{
        return;
    }
  }, [params.event]);

  return (
    <div className="flex flex-col pt-20">
        <SectionHeader text={`Coordinator Dashboard - ${eventName}`} />
        <Table registrationData={registrationData} />
    </div>
  );
};

export default Page