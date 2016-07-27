import {Exception} from "../../Source/Exception";

class MyException extends Exception
{
}

describe("when throwing exception without message parameters", () => {
    let result = null;

    try { MyException.throw(); } catch(e) { result = e }

    it("should be of the specific exception type", () => result.should.be.instanceof(MyException));
    it("should have an empty message", () => result.message.should.equal(""));
});