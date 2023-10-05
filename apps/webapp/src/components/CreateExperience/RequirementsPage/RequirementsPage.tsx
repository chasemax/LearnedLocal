import React from "react";
import { FormLabel } from "../Form/FormLabel";
import { InputField } from "../Form/InputField";
import FormPageHeader from "../Typography/Typography";

const RequirementsPage = () => {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col px-4">
      <FormPageHeader
        step={4}
        title="How should your guests prepare for the experience?"
        subtitle="This will ensure that they can get the most out of the experience. These fields are optional!"
      />
      <div className="rounded-lg bg-white p-8 shadow-md">
        <FormLabel text="Provided Materials" />
        <InputField
          id="provided"
          name="provided"
          type="text"
          placeholder="What materials will you provide, if any?"
          className="w-full"
        />

        <FormLabel text="Location Description" />
        <InputField
          id="locationDescription"
          name="locationDescription"
          type="text"
          placeholder="Are there any specific instructions when arriving at the location?"
          className="w-full"
        />

        <FormLabel text="Guest Requirements" />
        <InputField
          id="guestRequirements"
          name="guestRequirements"
          type="text"
          placeholder="What do the guests need to prepare beforehand?"
          className="w-full"
        />

        <FormLabel text="Activity Level" />
        <InputField
          id="activityLevel"
          name="activityLevel"
          type="text"
          placeholder="How physically intense is this experience? E.g. carry 30 lb objects, stand for 3 hours, etc."
          className="w-full"
        />

        <FormLabel text="Skill Level" />
        <InputField
          id="skillLevel"
          name="skillLevel"
          type="text"
          placeholder="E.g. 'Beginner friendly', 'Some artistic experience required', or 'Seasoned chess veterans'"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default RequirementsPage;
