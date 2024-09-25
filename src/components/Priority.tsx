import { ComponentPayload } from "../Types";

import Select from 'react-select';

import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
export const priorities = [{
    label: 'No vibration or sound. The notification will be under the fold in "Other notifications".',
    value: 1
  }, {
    label: 'No vibration or sound. Notification will not visibly show up until notification drawer is pulled down.',
    value: 2
  }, {
    label: "Short default vibration and sound. Default notification behavior.", 
    value: 3
   }, {
    label: 'Long vibration burst, default notification sound with a pop-over notification.',
    value: 4
   }, {
    label: 'Really long vibration bursts, default notification sound with a pop-over notification.',
    value: 5
   }]
export default function Priority({
  manifest,
  updateManifest,
}: ComponentPayload) {
  return (
    <div className="m-2">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Priority</span>
        </div>
        
        <Select
      components={animatedComponents}
      options={priorities}
       className="my-react-select-container"
   classNamePrefix="my-react-select"
   defaultValue={priorities[3]}
   onChange={(v:any) => updateManifest({
    ...manifest,
    priority: v.value
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
