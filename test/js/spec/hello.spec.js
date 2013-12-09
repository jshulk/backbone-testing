window.hello = function(){
	return "hello world";
}

describe("Trying out the test libraries", function(){
	describe("Chai", function(){
		it("Should be equal using 'expect' ", function(){
			expect(hello()).to.equal("hello world");
		});
	});

	describe("Sinon.js", function(){
		it("should report spy called", function(){
			var helloSpy = sinon.spy(window, "hello");
			expect(helloSpy.called).to.be.false;
			hello();
			expect(helloSpy.called).to.be.true;
			hello.restore();
		});
	});
});
