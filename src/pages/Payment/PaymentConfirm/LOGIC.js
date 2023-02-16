// router.get('/pay', payGet);
const payGet = async (req, res, next) => {
  console.log('pay');
  res.render('./pages/pay', {
    layout: false,
  });
};

// router.post('/pay', payPost);
const payPost = async (req, res, next) => {
  let iamport = new iamport({
    impKey: iamKeyObj.restApi,
    impSecret: iamKeyObj.rAsecret,
  });

  // 아임포트 고유 아이디로 결제 정보를 조회
  iamport.payment
    .getByImpUid({
      imp_uid: iamKeyObj.memberCode,
    })
    .then(function (result) {
      // To do
    })
    .catch(function (error) {
      // handle error
    });

  // 상점 고유 아이디로 결제 정보를 조회
  iamport.payment.getByMerchant({
    merchant_uid: 'your merchant_uid',
  });

  // 상태별 결제 정보 조회
  iamport.payment.getByStatus({
    payment_status: 'your payment_status',
  });

  res.send('pay post');
};

// router.post('/pay/complete', payComplete);
const payComplete = async (req, res, next) => {
  try {
    console.log(
      '#############  ' + moment().format('YYYY-MM-DD (ddd), HH:mm:ss')
    );
    console.log('/pay/complete');
    const { imp_uid, merchant_uid } = req.body; // req의 body에서 imp_uid, merchant_uid 추출
    console.log('imp_uid : ', imp_uid);
    console.log('merchant_uid : ', merchant_uid);
    res.status(200).json(req.body);
  } catch (e) {
    res.status(400).send(e);
  }
};

// router.post('/pay/complete/webhook', payCompleteWebhook);
const payCompleteWebhook = async (req, res, next) => {
  try {
    console.log(
      '------------  ' + moment().format('YYYY-MM-DD (ddd), HH:mm:ss')
    );
    console.log('/pay/complete/webhook');
    const { imp_uid, merchant_uid, status } = req.body; // req의 body에서 imp_uid, merchant_uid 추출
    console.log('status : ', status);
    console.log('imp_uid : ', imp_uid);
    console.log('merchant_uid : ', merchant_uid);
    res.status(200).json(req.body);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

// router.get('/pay/complete', payGetComplete);
const payGetComplete = async (req, res, next) => {
  console.log('<___Get___> 결재 성공');
  res.status(200).send('<___Get___> 결재 성공');
};

//
@성재  @Wecode 장찬영
[web js]
<script>
        function pay() {
            $(".receipt").slideUp("slow");
            $(".paid").slideDown("slow");
            requestPay();
        }

        function requestPay() {

            var IMP = window.IMP;     // 생략 가능
            IMP.init("imp11266991");    // 예: imp00000000
            // IMP.request_pay(param, callback) 결제창 호출
            let today = new Date();
            var year = today.getFullYear();
            var month = ('0' + (today.getMonth() + 1)).slice(-2);
            var day = ('0' + today.getDate()).slice(-2);
            var hours = ('0' + today.getHours()).slice(-2);
            var minutes = ('0' + today.getMinutes()).slice(-2);
            var seconds = ('0' + today.getSeconds()).slice(-2);
            var merchant_uid_num = `ORD${year + month + day}-${hours + minutes + seconds}2`;

            IMP.request_pay({       // param
                pg: "html5_inicis",
                pay_method: "card",                     // 🍒
                merchant_uid: merchant_uid_num,         // 🍒 우리 서버에서 생성하여 DB에 저장, 고유 주문번호로 관리 (이미 결제가 승인 된(status: paid) merchant_uid로는 재결제 불가)
                name: "노르웨이 회전 의자",             // PG사마다 차이가 있지만, 16자이내로 작성 권장
                amount: 99000,                            // 🍒
                //custom_data: {},                      // 가맹점 임의 지정 데이터, 주문건에 대해 부가정보를 저장할 공간이 필요할 때 사용
                //tax_free: 0,                          // amount 중 면세공급가액에 해당하는 금액
                //currency: 'KRW',
                //language: 'ko',
                buyer_email: "gildong@gmail.com",
                buyer_name: "홍길동",
                //buyer_tel: "010-4242-4242",             // 🍒
                buyer_addr: "서울특별시 강남구 신사동",
                buyer_postcode: "01181",
                //notice_url: [],                             // 관리자 콘솔에서 설정하는 Notification URL대신 사용할 URL, 주문마다 다른 혹은 복수의 Notification URL이 필요한 경우 사용
            }, function (rsp) {     // callback
                console.log('rsp :', rsp);
                if (rsp.success) {
                    fetch("http://onecue.cafe24app.com/api/pay/complete", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            imp_uid: rsp.imp_uid,
                            merchant_uid: rsp.merchant_uid
                        }),
                    }).then((response) => console.log(response));
                } else {
                    // 결제 실패 시 로직,
                    alert("결제에 실패하였습니다. 에러 내용: " + rsp.error_msg);
                }

                if (false) {    // 다음 로직이 실행이되지 않도록 한 것, 개발해야 함.

                    // 결제 성공 시 로직,
                    if (rsp.success) {
                        console.log('rsp.success', rsp.success)
                        // jQuery로 HTTP 요청 => 우리 서버에서 처리할 내용....
                        // http://onecue.cafe24app.com/api/pay
                        jQuery.ajax({
                            url: "http://onecue.cafe24app.com/api/pay/complete", // 예: https://www.myservice.com/payments/complete
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            data: {
                                imp_uid: rsp.imp_uid,
                                merchant_uid: rsp.merchant_uid
                            }
                        }).done(function (data) {
                            // 가맹점 서버 결제 API 성공시 로직
                            jQuery.ajax('.restext').append('결재를 성공했습니다.');
                            console.log('/pay/complete 로 라우팅된 결과' + data);
                        });
                    } else {
                        // 결제 실패 시 로직,
                        alert("결제에 실패하였습니다. 에러 내용: " + rsp.error_msg);
                    }
                }
            });
        }
    </script>
