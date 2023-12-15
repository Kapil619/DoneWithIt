import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';

import useLocation from '../hooks/useLocation';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, 'Please select atleast 1 image'),
});

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'floor-lamp' },
    { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'shoe-heel' },
    { label: 'Electronics', value: 3, backgroundColor: 'blue', icon: 'fan' },
    { label: 'Games', value: 4, backgroundColor: 'brown', icon: 'cards' },
    { label: 'Sports', value: 5, backgroundColor: 'purple', icon: 'basketball' },
    { label: 'Movies', value: 6, backgroundColor: 'orange', icon: 'music' },
    { label: 'Books', value: 7, backgroundColor: 'indigo', icon: 'book-open-variant' },
    { label: 'Vehicle', value: 8, backgroundColor: 'violet', icon: 'car' },
    { label: 'Other', value: 9, backgroundColor: 'grey', icon: 'application' },

];
function ListingEditScreen() {

    // const location = useLocation();

    return (
        <Screen style={styles.container} >
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: []
                }}
                // onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name={'images'} />
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    numberOfColumns={3}
                    name="category"
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField maxLength={255} multiline name={'description'} numberOfLines={2} placeholder='Description' />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default ListingEditScreen;