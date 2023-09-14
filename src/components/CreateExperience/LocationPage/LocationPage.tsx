import React from "react";
import { Field, FieldProps } from "formik";
import LocationPicker, { Pin } from "../LocationPicker/LocationPicker";
import { PinContextProvider } from "../LocationPicker/PinContext";
import FormPageHeader from "../Typography/Typography";

const LocationPage = () => {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col px-4">
      <FormPageHeader
        step={3}
        title="Now let's pinpoint the exact location of your experience"
        subtitle="Make sure that it is in a location accessible to those participating"
      />

      <Field name="location">
        {(
          { field, form }: FieldProps<Pin> // TODO: Extract into a separate component
        ) => (
          <PinContextProvider>
            <LocationPicker
              {...field}
              onLocationChange={(pin: Pin, city?: string | null) => {
                form.setFieldValue("location", pin);
                form.setFieldValue("city", city);
              }}
            />
          </PinContextProvider>
        )}
      </Field>
    </div>
  );
};

export default LocationPage;