import { ComponentPayload } from "../Types";

export default function Domain({
  domain,
  setDomain,
}: {
  domain: string;
  setDomain: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="mt-2 mb-2">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Domain</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <div className="label">
          {/* {/* <span className="label-text-alt">Bottom Left label</span> */}
          <span className="label-text-alt">default is ntfy.sh</span>
        </div>
      </label>
    </div>
  );
}
