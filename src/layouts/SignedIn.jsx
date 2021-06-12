import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.google.com/search?q=btk+akademi&biw=1197&bih=1158&tbm=isch&sxsrf=ALeKk00lwDMlLLZrg4V_xo-bnuMyDnd-fQ:1623509858504&source=lnms&sa=X&ved=2ahUKEwie3J7DrZLxAhUPglwKHbrPA0sQ_AUoA3oECAEQBQ#imgrc=8iOc6XvtljiCHM" />
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
