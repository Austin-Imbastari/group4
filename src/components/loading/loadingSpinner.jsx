import { ClipLoader } from "react-spinners";
import { LoadingEvents } from "./LoadingSpinnerSC";

export default function LoadingSpinner() {
  return (
    <LoadingEvents>
      <ClipLoader />
      <p>Loading…</p>
    </LoadingEvents>
  );
}
