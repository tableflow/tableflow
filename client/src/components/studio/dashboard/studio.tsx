import React, { useState } from "react"
import { Section, Columns } from "react-bulma-components"

import SEO from "../../utils/seo"
import Menu from "./menu/Menu"
import Panel from "./panels/Panel"
import FooterPadding from "../../utils/FooterPadding"

import getConfig from "../utils/getConfig"
import getUser from "../../utils/getUser"

const Studio = () => {
  const user = getUser()
  const [config, setConfig] = useState(getConfig(user?.id))

  return (
    <Section>
      <SEO title="TableFlow Studio" />
      <Columns className="is-reverse-mobile">
        <Columns.Column size="one-fifth">
          <Menu path="/studio" />
        </Columns.Column>
        <Columns.Column>
          <Panel config={config} />
        </Columns.Column>
      </Columns>
      <FooterPadding margin={1000} />
    </Section>
  )
}

export default Studio
