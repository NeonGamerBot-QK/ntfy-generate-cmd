import { ComponentPayload } from "../Types";

export default function Topic({ manifest, updateManifest }: ComponentPayload) {
return <div className="mt-2 mb-2">
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Topic</span>
  </div>
  <input type="text" placeholder="Type here"  value={manifest.topic} onChange={(e) => updateManifest({
    ...manifest, 
    topic: e.target.value
  })} className="input input-bordered w-full max-w-xs" />
  <div className="label">
    {/* {/* <span className="label-text-alt">Bottom Left label</span> */}
    <span className="label-text-alt">Make sure to keep this secret on public servers.</span>
  </div>
</label>
</div>
}