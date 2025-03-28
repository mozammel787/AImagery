import Header from '@/components/shared/Header';
import React from 'react';
import { transformationTypes } from '@/constants';
import TransformationFrom from '@/components/shared/TransformationFrom';
import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AddTransformationsTypePage = async ({ params: { type } }: SearchParamProps) => {
    const { userId } = auth()
    const transformation = transformationTypes[type]

    if (!userId) redirect('/sign-in')

    const user = await getUserById(userId)
    
    
    return (
        <>
            <Header
                title={transformation.title} subtitle={transformation.subTitle}
            />
            <section className='mt-10'>
                <TransformationFrom
                    action='Add'
                    userId={user?._id}
                    type={transformation.type as | TransformationTypeKey}
                    creditBalance={user?.creditBalance} />

            </section>
        </>
    );
};

export default AddTransformationsTypePage;