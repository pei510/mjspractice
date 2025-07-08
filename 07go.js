         // 排序前
        let sortBefore = document.getElementById("sortBefore");
        // 排序後
        let sortAfter = document.getElementById("sortAfter");
        // 第二區號碼
        let secNO = document.getElementById("secNO");


        // 威力彩
        function lott1() {
            let lott = [];
            // 第一區:1-38取6個
            // 建立存放號碼的空陣列

            //while
            while (1) {
                if (lott.length == 6) {
                    break;
                }

                let lottNo = Math.floor(Math.random() * 38) + 1;
                if (lott.includes(lottNo) == false) {   //沒有重覆
                    lott.push(lottNo);              //新增號碼到陣列中
                }
            }


            // 未排序
            sortBefore.textContent = "排序前的號碼" + lott;
            lott.sort((a, b) => {
                return a - b;
            })

            //第二區號碼
            sortAfter.textContent = "排序後的號碼：" + lott;
            secNO.textContent = "第二區的號碼：" + (Math.floor(Math.random() * 8) + 1);
        }