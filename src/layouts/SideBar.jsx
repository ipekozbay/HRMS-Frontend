import React from "react";
import { Icon, Menu, Container } from "semantic-ui-react";

export default function Sidebar() {
    return (
        <div>
            <Container className = "main">
                <Menu inverted icon="labeled" vertical color={"orange"}>
                    <Menu.Item
                        name="bullhorn"
                    >
                        <Icon color="black" name="bullhorn" />
                        Job Position
                    </Menu.Item>

                    <Menu.Item
                        name="user"
                    >
                        <Icon color="white" name="user" />
                        Jobseeker
                    </Menu.Item>

                    <Menu.Item
                        name="user"
                    >
                        <Icon color="white" name="user" />
                        Employer
                    </Menu.Item>
                </Menu>
            </Container>
        </div>
    );
}