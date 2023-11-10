import React from "react";
import { TypeTag } from "../component/TypeTag.js";

export function MainPage() {
    return (
        <div className="App">
        <header className="App-header">
            <p>
            This is the main page.
            </p>
            <TypeTag type="announcement" />
        </header>
        </div>
    );
    }
