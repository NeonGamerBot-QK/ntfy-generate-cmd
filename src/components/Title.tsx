import { ComponentPayload } from "../Types";

export default function Title({ manifest, updateManifest }: ComponentPayload) {
  return (
    <div className="m-2">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Title</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          value={manifest.title}
          onChange={(e) =>
            updateManifest({
              ...manifest,
              title: e.target.value,
            })
          }
          className="input input-bordered w-full max-w-xs"
        />
        <div className="label">
          {/* {/* <span className="label-text-alt">Bottom Left label</span> */}
          <span className="label-text-alt">
            Make sure to keep this secret on public servers.
          </span>
        </div>
      </label>
    </div>
  );
}
