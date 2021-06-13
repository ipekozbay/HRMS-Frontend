import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="link" />
                <Dropdown>
                    <Dropdown.Menu>
                        <Dropdown.Item text="bilgilerim " icon="info" />
                        <Dropdown.Item text="cıkıs yap " icon="signed-out" />

                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
