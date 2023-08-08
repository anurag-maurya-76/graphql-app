import React, { useState } from "react";
import UseFetchAppointmentByEmailId from "../Services/Queries/UseFetchAppointmentByEmailId";

export const Appointment = () => {
  const { isLoading, error, data } = UseFetchAppointmentByEmailId(
    "FetchAppointmentByEmailId",
    "anurag@gmail.com",
    {
      refetchInterval: 3000,
    }
  );

  if (!isLoading) {
    console.log("rerendered");
    return (
      <div>
        <div>{JSON.stringify(data.data.responseData)}</div>
      </div>
    );
  }
};
