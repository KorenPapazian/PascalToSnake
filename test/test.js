import assert from "assert";
import {pascaltosnake} from "../js/app.js";

describe('Array', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
});



describe('pascaltosnake', function () {
  it('should return test_controller', function () {
    assert.equal(pascaltosnake("TestController"), "test_controller");
  });

  it('should return movie_and_book', function () {
    assert.equal(pascaltosnake("MovieAndBook"), "movie_and_book");
  });

  it('should return app7_test', function () {
    assert.equal(pascaltosnake("App7Test"), "app7_test");
  });

  it('should return home', function () {
    assert.equal(pascaltosnake("Home"), "home");
  });

  it('should return play-movie', function () {
    assert.equal(pascaltosnake("play-movie"), "play-movie");
  });

  it('should return "1"', function () {
    assert.equal(pascaltosnake(1), "1");
  });
});