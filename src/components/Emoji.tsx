import { ComponentPayload } from "../Types";

import Select from 'react-select';
import emojis from "../emojis";

import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
export default function Emoji({
  manifest,
  updateManifest,
}: ComponentPayload) {
  return (
    <div className="m-2">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Emoji</span>
        </div>
        
        <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={emojis}
       className="my-react-select-container"
   classNamePrefix="my-react-select"
   onChange={(v) => updateManifest({
    ...manifest,
    tags: v.map((e:any)=>e.value)
   })}
    />
        
        <div className="label">
          {/* <span className="label-text-alt">Bottom Left label</span>
    <span className="label-text-alt">Bottom Right label</span> */}
        </div>
      </label>
    </div>
  );
}
