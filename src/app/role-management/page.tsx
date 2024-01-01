"use client";

import SectionHeader from "@/components/SectionHeader";
import { supabase } from "@/lib/supabase-client";
import events from "@/utils/events";
import { FormEvent, useEffect, useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState<string[] | undefined>();

  useEffect(() => {
    supabase
      .from("defined_roles")
      .select("role")
      .then((val) => {
        if (val.data) {
          const roles = val.data.map((value) => value.role);
          setRoles(roles);
        }
      });
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const phone = (e.target as HTMLFormElement).phone.value;
    const selected_role = (e.target as HTMLFormElement).selected_role.value;
    const selected_event = (e.target as HTMLFormElement).selected_event.value;

    await import("@/utils/functions/assignRoleToUser").then((val) =>
      val.assignRoleToUser(phone, selected_role, selected_event),
    );
  }

  return (
    <main className="flex flex-col items-center gap-y-12 py-12">
      <SectionHeader text="Assign Role" />
      <form
        className="flex w-full flex-col items-center gap-y-8 md:w-4/5 lg:w-2/4"
        onSubmit={handleSubmit}
      >
        <label className="w-full">
          Phone&nbsp;&nbsp;
          <input
            name="phone"
            type="number"
            className="w-full rounded-md border-b border-slate-400 bg-transparent px-5 py-1"
            required={true}
          />
        </label>
        <label className="w-full">
          Role&nbsp;&nbsp;
          <select
            className="w-full rounded-md border-b border-slate-400 bg-transparent px-5 py-1"
            name="selected_role"
            required={true}
          >
            {roles?.map((value, index) => {
              return (
                <option key={`role_options__${index}`} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </label>
        <label className="w-full">
          Event&nbsp;&nbsp;
          <select
            className="w-full rounded-md border-b border-slate-400 bg-transparent px-5 py-1"
            name="selected_event"
          >
            <option value={""}>No Event</option>
            {events?.map((value, index) => {
              return (
                <option key={`event_options__${index}`} value={value.id}>
                  {value.title}
                </option>
              );
            })}
          </select>
        </label>
        <button className="rounded-md bg-white p-3 text-black">Submit</button>
      </form>
    </main>
  );
};

export default RoleManagement;
