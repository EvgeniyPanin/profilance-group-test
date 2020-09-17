import React from "react";
import { create } from "react-test-renderer";
import UserStatus from './UserStatus'

describe("UserStatus", () => {
  test("status should be add to state", () => {
    const component = create(<UserStatus status={'this is status'} />);
    const instance = component.root;
    expect(instance._fiber.memoizedProps.status).toBe('this is status');
  });
});