/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Exception} from "../../Source/Exception";

const message = "My Exception";

class MyException extends Exception
{
    constructor() {
        super(message);
    }
}

describe("when throwing exception without message parameters", () => {
    let result = null;

    try { MyException.throw(); } catch(e) { result = e }

    it("should be of the specific exception type", () => result.should.be.instanceof(MyException));
    it("should have the expected message", () => result.message.should.equal(message));
});