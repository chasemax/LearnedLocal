import * as React from "react";
import { ErrorMessage, Field, useFormikContext } from "formik";
import type { FormValues } from "../../../CreateExperience/types";
import FieldLabel from "~/components/common/Fields/FieldLabel";

type Props = {
  name: string;
  displayName: string;
  required: boolean;
};

const PriceField = ({ name, displayName, required }: Props) => {
  const { values } = useFormikContext<FormValues>();

  return (
    <div className="flex flex-col">
      <div>
        <FieldLabel displayName={displayName} required={required} />

        <Field
          name={name}
          type="number"
          disabled={values.free ?? false}
          placeholder="1.00"
          className={`${
            values.free ? "bg-ll-slate text-ll-black" : ""
          } mt-2 w-full rounded-md border border-gray-400 bg-ll-grey p-3 text-sm`}
        />
      </div>
      <div className="flex content-center items-center pb-4 pt-2 ">
        <Field name="free" type="checkbox" className="checkbox" />
        <div className="pl-2 font-inter text-xs  text-gray-500">
          This is a free experience
        </div>
      </div>

      <ErrorMessage name="price" component="div" className="text-red-500" />
    </div>
  );
};

export default PriceField;
