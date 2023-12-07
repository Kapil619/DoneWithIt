import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';


function AppFormPicker({ items, name, PickerItemComponent, placeholder, width, numberOfColumns }) {

    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker width={width} PickerItemComponent={PickerItemComponent} items={items} numberOfColumns={numberOfColumns} onSelectitem={(item) => setFieldValue(name, item)}
                placeholder={placeholder} selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;