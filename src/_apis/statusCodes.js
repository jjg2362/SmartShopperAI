const statusCode = {
  success: {
    ok: 200,
    created: 201
  },
  error: {
    bad_request: 400,
    unauth: 401
    // internal_error: 520,
    // not_purchased_item_error: 521,
    // purchase_error: 522,
    // coupon_error: 523,
    // destroyed_user_error: 524,
    // level_not_enough: 525,
  }
};

export default statusCode;
