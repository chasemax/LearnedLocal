import React from "react";
import { Field, FieldProps } from "formik";
import LocationPicker, { Pin } from "./LocationPicker/LocationPicker";
import { PinContextProvider } from "./LocationPicker/PinContext";
import FormPageHeader from "./Typography/Typography";

const LocationPage = () => {
  return (
    <div className="container mx-auto overflow-y-auto py-12 px-4 sm:px-6 lg:px-8">
      <FormPageHeader
        step={4}
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
              onLocationChange={(pin: Pin) => {
                form.setFieldValue("location", pin);
              }}
            />
          </PinContextProvider>
        )}
      </Field>
    </div>
  );
};

export default LocationPage;
