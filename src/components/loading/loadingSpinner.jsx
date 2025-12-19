import { ClipLoader } from "react-spinners";
import { LoadingEvents } from "./loadingSpinnerSC";

export default function LoadingSpinner() {
  return (
    <LoadingEvents>
      <ClipLoader />
      <p>Loading…</p>
    </LoadingEvents>
  );
}
