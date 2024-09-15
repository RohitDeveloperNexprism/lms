import React from "react";
import { useSelector } from "react-redux";
import AddClass from "../../components/pages/Academics/modal/AddClass";
import AddRoom from "../../components/pages/hostel/AddRoom";
import AddFood from "../../components/pages/hostel/mess/AddFood";

export default function Modal() {
    const { isOpen, componentName } = useSelector(
        (state) => state.allCommonModal
    );

    const renderComponent = () => {
        switch (componentName) {
            case "AddClass":
                return <AddClass />;
            case "AddRoom":
                return <AddRoom />;
            case "AddFood":
                return <AddFood />;

            default:
                return null;
        }
    };
    return <>{isOpen && renderComponent()}</>;
}