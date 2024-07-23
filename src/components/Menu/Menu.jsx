import "./Menu.css"
import {Tabs} from "antd";
import SignUpForm from "../SignUpForm/SignUpForm.jsx";

const items = [
    {
        key: '1',
        label: 'Admin',
        children: <SignUpForm/>,
    },
    {
        key: '2',
        label: 'Human Resources',
        children: '',
    },
    {
        key: '3',
        label: 'Mentor',
        children: '',
    },
    {
        key: '4',
        label: 'School',
        children: '',
    },
    {
        key: '5',
        label: 'Intern',
        children: '',
    },
];

const Menu = () => <div className={"menu"}><Tabs  defaultActiveKey="1" items={items} size={"large"}  /></div>

export default Menu
