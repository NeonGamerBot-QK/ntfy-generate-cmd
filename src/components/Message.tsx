import { ComponentPayload } from "../Types";

export default function Message({
  manifest,
  updateManifest,
}: ComponentPayload) {
  return (
    <div className="mt-2 mb-2">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Message</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          value={manifest.message}
          onChange={(e) =>
            updateManifest({
              ...manifest,
              message: e.target.value,
            })
          }
          className="input input-bordered w-full max-w-xs"
        />
        <div className="label">
          {/* <span className="label-text-alt">Bottom Left label</span>
    <span className="label-text-alt">Bottom Right label</span> */}
        </div>
      </label>
    </div>
  );
}
