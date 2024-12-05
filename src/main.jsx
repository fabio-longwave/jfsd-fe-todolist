import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import LoginForm from "./components/LoginFormComponent/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import RegistrationForm from "./components/RegistrationFormComponent/RegistrationForm";
import {Provider} from "react-redux";
import {persistor, store} from "./store/store"
import {PersistGate} from "redux-persist/integration/react";
import TodoList from "./components/Todo/TodoList/TodoList.jsx";
import TodoPage from "./components/Todo/TodoPage/TodoPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <LoginForm/>
            },
            {
                path: 'registration',
                element: <RegistrationForm/>
            },
            {
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: '/todo-list',
                        element: <TodoPage/>
                    }
                ]
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RouterProvider router={router}/>
            </PersistGate>
        </Provider>
    </StrictMode>,
)
