// import { render, screen, fireEvent } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import Navbar from "./Navbar";

// test("renders Navbar and toggles mobile menu", () => {
//   render(
//     <MemoryRouter>
//       <Navbar />
//     </MemoryRouter>
//   );

//   expect(screen.getByText("Pathfinder College")).toBeInTheDocument();

//   expect(screen.getByText("Home")).toBeInTheDocument();
//   expect(screen.getByText("Courses")).toBeInTheDocument();

//   const menuButton = screen.getByLabelText("Toggle menu");
//   fireEvent.click(menuButton);
//   expect(screen.getByText("Contact Us")).toBeVisible();

//   fireEvent.click(menuButton);
//   expect(screen.queryByText("Contact Us")).not.toBeVisible();
// });
