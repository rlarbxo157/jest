// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// describe("<NotFound />",()=> {
//     it("render header",()=> {
//         const {getByText} = render(<NotFound path="/abc" />);
//         const header = getByText("page not found");
//         expect(header).toBeInTheDocument();
//     })
// })