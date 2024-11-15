import React, { useState, lazy, Suspense } from 'react';

const Modal = lazy(() => import("./Modal"));

export function LazyLoad() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            <button onClick={openModal}>Show</button>
            <Suspense fallback={<div> Loading... </div>}>
                {showModal && <Modal onClose={closeModal} />}
                <button onClick={closeModal}>Close </button>
            </Suspense>

        </div>
    )
}