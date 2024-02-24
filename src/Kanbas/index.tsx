import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useEffect, useState } from "react";


function Kanbas() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ?
                <div className="d-flex">
                    <div style={{ flexGrow: 1 }}>
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account" element={<h1>&nbsp; Account</h1>} />
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route path="Courses/:courseId/*" element={<Courses />} />
                            <Route path="Courses" element={<Navigate to="CS4550/Home" />} />
                        </Routes>

                    </div>
                </div>
                :
                <div className="d-flex">
                    <KanbasNavigation />
                    <div style={{ flexGrow: 1 }}>
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account" element={<h1>&nbsp; Account</h1>} />
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route path="Courses/:courseId/*" element={<Courses />} />
                            <Route path="Courses" element={<Navigate to="CS4550/Home" />} />
                        </Routes>

                    </div>
                </div>
            }
        </div>
    );
}
export default Kanbas;