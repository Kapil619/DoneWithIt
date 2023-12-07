import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
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
    return (
        <Screen style={styles.container} >
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
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