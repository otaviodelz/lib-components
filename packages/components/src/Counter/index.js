import React, { useState } from "react";
import { Button, Chip } from "@naturacosmeticos/natds-web";
import { Tag } from '@lib-components/commons';

const Counter = () => {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <Tag />
      <Button onClick={() => setIncrement((prev) => ++prev)}>Click</Button>
      <Chip label={increment} />
    </div>
  );
};

export default Counter;
