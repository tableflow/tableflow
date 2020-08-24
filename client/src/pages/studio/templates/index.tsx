// If you don't want to use TypeScript you can delete this file!
import React from "react"
import Loadable from "@loadable/component"

import SEO from "../../../components/utils/seo"
const Studio = Loadable(() =>
  import("../../../components/studio/dashboard/Studio")
)

const TemplatesPage = () => (
  <React.Fragment>
    <SEO title="Templates" />
    <Studio />
  </React.Fragment>
)

export default TemplatesPage