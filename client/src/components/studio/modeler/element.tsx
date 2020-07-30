import React, { useState, useEffect } from "react"

import NewElement from "./newelement"
import ForeignElement from "./foreignelement"
import Arrow from "./arrow"
import Table from "./table"

const Element = (props: {
  location: { line: number; position: number }
  prior: any
  element: any
  handleElement: Function
}) => {
  function elementSwitch(element: any) {
    switch (element?.type) {
      case "new":
        return (
          <NewElement
            position={element?.position}
            dimensions={element?.dimensions}
          />
        )
      case "parent":
        return <p>Parent Flow</p>
      case "table":
        return (
          <ForeignElement
            position={element?.position}
            dimensions={element?.dimensions}
          >
            <Table
              data={element?.value}
              location={props.location}
              handleElement={props.handleElement}
            />
          </ForeignElement>
        )
      case "decision":
        return (
          <ForeignElement
            position={element?.position}
            dimensions={element?.dimensions}
          >
            <p>Decision Table</p>
          </ForeignElement>
        )
      case "function":
        return (
          <ForeignElement
            position={element?.position}
            dimensions={element?.dimensions}
          >
            <p>Function</p>
          </ForeignElement>
        )
      case "subflow":
        return <p>Subflow</p>
      case "return":
        return <p>Return</p>
      default:
        return (
          <ForeignElement
            position={element?.position}
            dimensions={element?.dimensions}
          >
            <p>Error: Unknown Element Type</p>
          </ForeignElement>
        )
    }
  }

  return (
    <g>
      {elementSwitch(props?.element)}
      {props?.prior && (
        <Arrow source={props?.prior} destination={props?.element} />
      )}
    </g>
  )
}

export default Element