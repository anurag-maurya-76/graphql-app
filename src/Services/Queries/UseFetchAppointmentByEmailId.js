import { useQuery } from "react-query";
import appointmentManagement from "../AppointmentManagementService";

export default function UseFetchAppointmentByEmailId(
  queryKey,
  emailId,
  queryConfig
) {
  const { isLoading, error, data } = useQuery(
    queryKey,
    () => appointmentManagement.fetchAppointmentByEmailId({ emailId }),
    queryConfig
  );
  return { isLoading, error, data };
}
