function row_plus(id, flag_down_ok){

			var n_id = parseInt(id.match(/\d+/g).map(Number));
			var ch = id.charAt(0);
			var ne_ = document.getElementById(id).name;
			// var ne_int = parseInt(ne_);
			
			// console.log('new id : '+new_id , ch);
			// console.log("row id " + row);
	if(n_id==1 || flag_down_ok ==1){
			if(row <= n_id){
				
				var new_id = n_id +1;
				var x = `<tr id="${new_id}">
								<td id="a_${new_id}.td"><button id="a_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id+ (2 * n_id)}"><i id="a_${new_id}.icon"></i></button></td>
								<td id="b_${new_id}.td"><button id="b_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 1}"><i id="b_${new_id}.icon"></i></button></td>
								<td id="c_${new_id}.td"><button id="c_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 2}"><i id="c_${new_id}.icon"></i></button></td>
								<td id="d_${new_id}.td"><button id="d_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id+ (2 * n_id) + 3}"><i id="d_${new_id}.icon"></i></button></td>
								<td id="e_${new_id}.td"><button id="e_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 4}"><i id="e_${new_id}.icon"></i></button></td>
								<td id="f_${new_id}.td"><button id="f_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 5}"><i id="f_${new_id}.icon"></i></button></td>
								<td id="g_${new_id}.td"><button id="g_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id+ (2 * n_id) + 6}"><i id="g_${new_id}.icon"></i></button></td>
								<td id="h_${new_id}.td"><button id="h_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 7}"><i id="h_${new_id}.icon"></i></button></td>
								<td id="i_${new_id}.td"><button id="i_${new_id}" onclick="clicked(this.id)" value="empty" class="${new_id + (2 * n_id) + 8}"><i id="i_${new_id}.icon"></i></button></td>
							</tr>`

				var h = document.getElementById(n_id.toString());
				h.insertAdjacentHTML("beforeBegin", x);
				row++;
			
			}else{
				 return;
			}


			return ttl_rows = ttl_rows + 1;
			
		}


}
function check_down(id){
	var id_n = parseInt(id.match(/\d+/g).map(Number));
	var id_x = id.charAt(0).toString();
	var idd = id_x + "_" + (id_n -1).toString();
	//var z_per = null;
	var flag_down_ok = 0;
	// console.log("id x : " + idd);
	if(id_n>1){
		var z_per =  document.getElementById(idd).value;
		if(z_per != "empty"){
			return flag_down_ok = 1;
		}else{
			return flag_down_ok = 0;
		}
	}else{
		return flag_down_ok = 1;
	}

}

function draw_ico(id, flag_down_ok){
	var z =  document.getElementById(id).value;
	// var ttl_ =  document.getElementById(id);
	// var ttl_r = parseInt(ttl.match(/\d+/g).map(Number));
	
	if(flag_down_ok == 1){
		
		if(a == 0 && z=="empty"){
				document.getElementById(id+".icon").className = "fas fa-times";
				document.getElementById(id).style.backgroundColor = "red";
				document.getElementById("player").innerHTML = "Player2's Turn";
				document.getElementById(id).value = "cross";
				a++;
				
		}else if(z == "empty"){
				document.getElementById(id).value = "circle";
				document.getElementById(id+".icon").className = "fas fa-circle";
				document.getElementById(id).style.backgroundColor = "blue";
				document.getElementById("player").innerHTML = "Player1's Chance";
				a--;
				

		}

	}
}




function check_winner(){
	
	function check_set(set){
				out0 = set[0];
				out1 = set[1];
				out2 = set[2];
				out3 = set[3];

				console.log(out0,out1,out2,out3);
				var q_out0 = document.getElementById(out0).value;
				var q_out1 = document.getElementById(out1).value;
				var q_out2 = document.getElementById(out2).value;
				var q_out3 = document.getElementById(out3).value;
				if(q_out0 == "cross" && q_out1 == "cross" && q_out2 == "cross" && q_out3 == "cross"){
					out = [true,"cross",[out0,out1,out2,out3]];
				}else if(q_out0 == "circle" && q_out1 == "circle" && q_out2 == "circle" && q_out3 == "circle"){
					out = [true,"circle",[out0,out1,out2,out3]];
				}

				if(out[0]){
					var pos = out[2];
					document.getElementById(pos[0]+".icon").style.color = "yellow";
					document.getElementById(pos[1]+".icon").style.color = "yellow";
					document.getElementById(pos[2]+".icon").style.color = "yellow";
					document.getElementById(pos[3]+".icon").style.color = "yellow";
				}

				var sign = out[1];

			if(sign == "cross"){
				document.getElementById("winner").innerHTML = "Player1's Wins";
				document.getElementById("player").innerHTML = "🎉🎉";
			}if(sign == "circle"){

				document.getElementById("winner").innerHTML = "Player2's Wins";
				document.getElementById("player").innerHTML = "🎉🎉";
			}
				// console.log("***out is : " + out);
				// console.log(q_out0,q_out1,q_out2);
	}
	var x =1;
	while(x <= ttl_rows){
		// console.log("x is " + x);

		//check the L to R (strate) (l2r) 
		var win_set_l2r1 = [`a_${x}`, `b_${x}`, `c_${x}`, `d_${x}`];
		var win_set_l2r2 = [`b_${x}`, `c_${x}`, `d_${x}`, `e_${x}`];
		var win_set_l2r3 = [`c_${x}`, `d_${x}`, `e_${x}`, `f_${x}`];
		var win_set_l2r4 = [`d_${x}`, `e_${x}`, `f_${x}`, `g_${x}`];
		var win_set_l2r5 = [`e_${x}`, `f_${x}`, `g_${x}`, `h_${x}`];
		var win_set_l2r6 = [`f_${x}`, `g_${x}`, `h_${x}`, `i_${x}`];
		
                //left 2 right (l2r) 
		check_set(win_set_l2r1);
		check_set(win_set_l2r2);
		check_set(win_set_l2r3);
		check_set(win_set_l2r4);
		check_set(win_set_l2r5);
		check_set(win_set_l2r6);
		
                
		if(ttl_rows>=3 && x <= ttl_rows - 2){  //rows > 3, then check cross and horizontal inputs
			//check X (down left to up right) (dl2ur) 
			var win_set_dl2ur1 = [`a_${x}`, `b_${x+1}`, `c_${x+2}`, `d_${x+3}`];
			var win_set_dl2ur2 = [`b_${x}`, `c_${x+1}`, `d_${x+2}`, `e_${x+3}`];
			var win_set_dl2ur3 = [`c_${x}`, `d_${x+1}`, `e_${x+2}`, `f_${x+3}`];
			var win_set_dl2ur4 = [`d_${x}`, `e_${x+1}`, `f_${x+2}`, `g_${x+3}`];
			var win_set_dl2ur5 = [`e_${x}`, `f_${x+1}`, `g_${x+2}`, `h_${x+3}`];
			var win_set_dl2ur6 = [`f_${x}`, `g_${x+1}`, `h_${x+2}`, `i_${x+3}`];
			
			//check X (up left to down right) (ul2dr) 
			var win_set_ul2dr1 = [`a_${x+3}`, `b_${x+2}`, `c_${x+1}`, `d_${x}`];
			var win_set_ul2dr2 = [`b_${x+3}`, `c_${x+2}`, `d_${x+1}`, `e_${x}`];
			var win_set_ul2dr3 = [`c_${x+3}`, `d_${x+2}`, `e_${x+1}`, `f_${x}`];
			var win_set_ul2dr4 = [`d_${x+3}`, `e_${x+2}`, `f_${x+1}`, `g_${x}`];
			var win_set_ul2dr5 = [`e_${x+3}`, `f_${x+2}`, `g_${x+1}`, `h_${x}`];
			var win_set_ul2dr6 = [`f_${x+3}`, `g_${x+2}`, `h_${x+1}`, `i_${x}`];
			
			// check up and down (d2u) 
			var win_set_d2u1 = [`a_${x}`, `a_${x+1}`, `a_${x+2}`, `a_${x+3}`];
			var win_set_d2u2 = [`b_${x}`, `b_${x+1}`, `b_${x+2}`, `b_${x+3}`];
			var win_set_d2u3 = [`c_${x}`, `c_${x+1}`, `c_${x+2}`, `c_${x+3}`];
			var win_set_d2u4 = [`d_${x}`, `d_${x+1}`, `d_${x+2}`, `d_${x+3}`];
			var win_set_d2u5 = [`e_${x}`, `e_${x+1}`, `e_${x+2}`, `e_${x+3}`];
			var win_set_d2u6 = [`f_${x}`, `f_${x+1}`, `f_${x+2}`, `f_${x+3}`];
			var win_set_d2u7 = [`g_${x}`, `g_${x+1}`, `g_${x+2}`, `g_${x+3}`];
			var win_set_d2u8 = [`h_${x}`, `h_${x+1}`, `h_${x+2}`, `h_${x+3}`];
			var win_set_d2u9 = [`i_${x}`, `i_${x+1}`, `i_${x+2}`, `i_${x+3}`];

                        //calling

			//down left 2 up right (dl2ur)
			check_set(win_set_dl2ur1);
			check_set(win_set_dl2ur2);
			check_set(win_set_dl2ur3);
			check_set(win_set_dl2ur4);
			check_set(win_set_dl2ur5);
                        check_set(win_set_dl2ur6);


			//down 2 up or up 2 down (d2u) 
			check_set(win_set_d2u1);
			check_set(win_set_d2u2);
			check_set(win_set_d2u3);
			check_set(win_set_d2u4);
			check_set(win_set_d2u5);
			check_set(win_set_d2u6);
                        check_set(win_set_d2u7);
			check_set(win_set_d2u8);
			check_set(win_set_d2u9);

			//up left 2 down right (ul2dr) 
			check_set(win_set_ul2dr1);
			check_set(win_set_ul2dr2);
			check_set(win_set_ul2dr3);
			check_set(win_set_ul2dr4);
			check_set(win_set_ul2dr5);
                        check_set(win_set_ul2dr6);
		}
		x=x+1;
	}
	delete x;

	
}


