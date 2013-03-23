drawBody.frontright = function(ctx, colorBody, colorButt, colorOutline, callfront, callback) {
 
   if(typeof(callfront) != "undefined" & callfront != '')
        callfront();
		 
	ctx.save();   
    ctx.translate(pony.translate[0], pony.translate[1]);
    ctx.scale(pony.scale,pony.scale);
    ctx.beginPath();     
	ctx.moveTo(0,0);
	ctx.lineTo(744.09448819,0);
	ctx.lineTo(744.09448819,1052.3622047);
	ctx.lineTo(0,1052.3622047);
	ctx.closePath();
	ctx.clip();
	ctx.strokeStyle = 'rgba(0,0,0,0)';
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';
	ctx.miterLimit = 4;
	ctx.save();
	ctx.restore();
	ctx.save();
	ctx.restore();
	ctx.save();
	ctx.save();
	ctx.fillStyle = colorButt;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(283.07283,703.76112);
	ctx.bezierCurveTo(298.25738,703.76112,322.78213,701.1546,324.83410000000003,697.87145);
	ctx.bezierCurveTo(326.88606000000004,694.58831,352.01890000000003,541.24539,351.19811000000004,541.24539);
	ctx.bezierCurveTo(350.37733000000003,541.24539,303.59249000000005,538.78303,303.59249000000005,538.78303);
	ctx.bezierCurveTo(303.59249000000005,538.78303,281.8416500000001,637.27742,279.3792900000001,640.1501700000001);
	ctx.bezierCurveTo(276.9169300000001,643.0229200000001,283.07283000000007,703.7611200000001,283.07283000000007,703.7611200000001);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorBody;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(268.91141,551.27783);
	ctx.bezierCurveTo(263.24007,548.95908,255.21729,555.40121,251.79127,563.14034);
	ctx.bezierCurveTo(240.31754999999998,589.05858,216.07962,635.54722,216.7994,688.94658);
	ctx.bezierCurveTo(217.07449,709.35501,221.78807,712.04091,232.60781,715.6688700000001);
	ctx.bezierCurveTo(244.31278,719.5936600000001,259.79487,719.83063,270.9314,717.3221400000001);
	ctx.bezierCurveTo(289.12578,713.2238800000001,295.25096,709.4177700000001,289.50368,682.4991300000002);
	ctx.bezierCurveTo(281.07284999999996,643.0115300000001,301.05395999999996,571.3989700000002,317.12595999999996,550.7520200000001);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorButt;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(371.39769,533.53872);
	ctx.bezierCurveTo(354.03099000000003,584.17823,363.95331,619.3637200000001,366.78933,668.63657);
	ctx.bezierCurveTo(368.32488,695.31528,368.21931,695.75756,386.44302,700.75276);
	ctx.bezierCurveTo(397.20432999999997,703.7024799999999,413.97026,703.8796199999999,428.53789,702.7531399999999);
	ctx.bezierCurveTo(447.35585000000003,701.2979899999999,444.67578000000003,686.8322,439.2802,669.99362);
	ctx.bezierCurveTo(423.39256,620.41134,416.40094999999997,581.7302999999999,419.54632999999995,528.7315199999999);
	ctx.bezierCurveTo(418.02284999999995,528.99718,371.39768999999995,533.5387199999999,371.39768999999995,533.5387199999999);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(416.90682,528.5896);
	ctx.bezierCurveTo(413.74316,581.89633,420.80966,621.05981,436.75057,670.80835);
	ctx.bezierCurveTo(439.41998,679.13906,441.21916999999996,686.7419,440.37557,691.68335);
	ctx.bezierCurveTo(439.95376999999996,694.15408,439.04681999999997,695.91519,437.28182,697.30835);
	ctx.bezierCurveTo(435.51682,698.70151,432.70749,699.78346,428.34432,700.12085);
	ctx.bezierCurveTo(413.95381,701.2336300000001,397.26745,700.9547200000001,387.15682,698.18335);
	ctx.bezierCurveTo(382.61114,696.93736,379.28013,695.99147,377.00057,694.9646);
	ctx.bezierCurveTo(374.72101,693.93773,373.54238,692.9916000000001,372.62557,691.4646);
	ctx.bezierCurveTo(370.79193999999995,688.4106,370.20608999999996,681.83952,369.43807,668.49585);
	ctx.bezierCurveTo(366.58583,618.94125,356.76279,584.39232,373.90682,534.4021);
	ctx.lineTo(368.87557,532.68335);
	ctx.bezierCurveTo(351.2862,583.97215,361.33702,619.7860000000001,364.15682,668.7771);
	ctx.bezierCurveTo(364.92435,682.1121400000001,365.04091999999997,689.09774,368.09432,694.18335);
	ctx.bezierCurveTo(369.62102,696.72616,371.93901999999997,698.51368,374.81307,699.80835);
	ctx.bezierCurveTo(377.68712,701.10302,381.1844,702.05674,385.75057,703.30835);
	ctx.bezierCurveTo(397.16256,706.43642,414.00581999999997,706.54228,428.75057,705.4021);
	ctx.bezierCurveTo(433.79638,705.01192,437.70664999999997,703.71924,440.56307,701.4646);
	ctx.bezierCurveTo(443.41949,699.20996,445.00834,696.0220400000001,445.59432,692.5896);
	ctx.bezierCurveTo(446.76628,685.72473,444.53924,677.69122,441.81307,669.18335);
	ctx.bezierCurveTo(425.9787,619.76733,419.06097,581.59293,422.18807,528.9021);
	ctx.lineTo(416.90682,528.5896);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorBody;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(267.21297,564.97142);
	ctx.bezierCurveTo(272.89425,548.73633,268.44955999999996,532.49793,262.69693,517.78621);
	ctx.bezierCurveTo(256.08158000000003,500.86816999999996,253.51843000000002,474.16364999999996,263.15028,445.99276);
	ctx.bezierCurveTo(275.31923,410.40146999999996,311.87335,389.59598,355.98251,422.67783);
	ctx.lineTo(366.79305999999997,420.17938);
	ctx.lineTo(374.18012999999996,388.57910999999996);
	ctx.bezierCurveTo(374.18012999999996,388.57910999999996,452.15484999999995,396.37657999999993,456.66918,403.35326999999995);
	ctx.bezierCurveTo(461.18349,410.32994999999994,461.59389,456.29398999999995,458.31075,472.29932999999994);
	ctx.bezierCurveTo(455.02761,488.30465999999996,446.40934999999996,521.95691,416.45063999999996,543.7077499999999);
	ctx.bezierCurveTo(386.49192999999997,565.4585999999999,340.11749,560.12348,340.11749,560.12348);
	ctx.bezierCurveTo(340.11749,560.12348,332.32002,558.48191,322.06019,552.32601);
	ctx.bezierCurveTo(311.80035999999996,546.17011,306.87564,555.60916,306.87564,555.60916);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorBody;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(464.61059,245.49525);
	ctx.bezierCurveTo(467.49447,228.90204,465.96742,207.84778,461.85697,195.17185999999998);
	ctx.bezierCurveTo(457.65582,182.21632,446.30884,179.84228,437.09457,189.65749999999997);
	ctx.bezierCurveTo(422.04017999999996,205.69378999999998,401.54141,261.60929999999996,428.38158,292.22166);
	ctx.bezierCurveTo(459.49129999999997,324.91253,474.49473,284.57412999999997,464.61059,245.49525);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(450.65433,181.40612);
	ctx.bezierCurveTo(453.50085,181.74066,456.06996000000004,183.27686999999997,458.1675,185.60648999999998);
	ctx.bezierCurveTo(460.26503,187.93610999999999,461.97936000000004,191.05749999999998,463.47511000000003,194.97623);
	ctx.bezierCurveTo(468.46547000000004,208.05065,472.65165,232.8198,465.03907000000004,253.42140999999998);
	ctx.bezierCurveTo(465.62561000000005,236.43499999999997,463.57721000000004,210.71684999999997,458.54408000000006,196.86428999999998);
	ctx.bezierCurveTo(457.25820000000004,193.32520999999997,455.70867000000004,190.78716999999997,454.2437800000001,189.16018999999997);
	ctx.bezierCurveTo(452.7788800000001,187.53321999999997,451.43324000000007,186.86233,450.0178600000001,186.69597999999996);
	ctx.bezierCurveTo(447.1871200000001,186.36329999999995,442.8690800000001,188.50904999999997,437.5259300000001,194.56951999999995);
	ctx.bezierCurveTo(430.8038700000001,202.19402999999994,422.4161500000001,219.38900999999996,419.5357600000001,238.62770999999995);
	ctx.bezierCurveTo(416.3607600000001,259.8341899999999,420.5210300000001,276.76520999999997,434.1801900000001,298.78977999999995);
	ctx.bezierCurveTo(413.3299700000001,283.26741999999996,411.3265900000001,258.10627999999997,414.3069900000001,237.84407999999996);
	ctx.bezierCurveTo(417.2873800000001,217.58187999999996,425.7137200000001,199.94356999999997,433.5376600000001,191.06924999999995);
	ctx.bezierCurveTo(439.3693100000001,184.45468999999994,444.9612600000001,180.73703999999995,450.6543300000001,181.40611999999996);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorBody;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(529.11243,354.41462);
	ctx.bezierCurveTo(535.20339,308.58101,520.33837,252.39459,485.65876000000003,234.99558000000002);
	ctx.bezierCurveTo(440.78881,212.484,377.06194000000005,212.44383000000002,359.08273,272.82956);
	ctx.bezierCurveTo(341.10343,333.21529000000004,373.29229000000004,412.67835,345.55760000000004,449.51335);
	ctx.lineTo(389.67393000000004,451.50641);
	ctx.bezierCurveTo(389.67393000000004,451.50641,407.73769000000004,418.58826,418.69312,408.26783);
	ctx.bezierCurveTo(479.05302,426.25972,526.60812,402.16967,534.37116,380.5911);
	ctx.bezierCurveTo(542.08645,359.14527999999996,528.89691,354.3787,529.11243,354.41461999999996);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(266.71932,548.12085);
	ctx.bezierCurveTo(263.46648999999996,547.9847,260.09351999999996,549.4082,257.03182,551.37085);
	ctx.bezierCurveTo(252.94956,553.98771,249.23342999999997,557.81802,247.06306999999998,562.1521);
	ctx.bezierCurveTo(235.43753999999998,585.3676800000001,215.55765999999997,636.05029,214.15681999999998,688.87085);
	ctx.bezierCurveTo(213.87983999999997,699.31465,215.10205,705.72589,218.31306999999998,710.1521);
	ctx.bezierCurveTo(221.52408999999997,714.57831,226.28246,716.34984,231.75056999999998,718.18335);
	ctx.bezierCurveTo(244.09285999999997,722.3218400000001,259.8155,722.5341500000001,271.50057,719.9021);
	ctx.bezierCurveTo(280.70743,717.82827,287.60478,715.77542,291.31307,709.9021);
	ctx.bezierCurveTo(295.02135999999996,704.02878,294.83112,695.66161,292.09432,681.9646);
	ctx.bezierCurveTo(288.14608999999996,662.20469,289.83403999999996,635.49023,295.12557,610.9021);
	ctx.bezierCurveTo(300.4171,586.31397,309.42257,563.75765,319.12557,552.4646);
	ctx.lineTo(315.12557,549.0271);
	ctx.bezierCurveTo(304.24782,561.68742,295.37629999999996,584.6525,289.96932,609.7771);
	ctx.bezierCurveTo(284.56234,634.9017,282.72479999999996,662.09708,286.90682,683.0271);
	ctx.bezierCurveTo(289.56325,696.32189,289.19063,703.32393,286.81311999999997,707.0896);
	ctx.bezierCurveTo(284.43555999999995,710.85527,279.33189,712.72142,270.34436999999997,714.74585);
	ctx.bezierCurveTo(259.75638,717.1307800000001,244.50576999999998,716.86319,233.43811999999997,713.1521);
	ctx.bezierCurveTo(228.08648999999997,711.35765,224.71789999999996,709.9542700000001,222.59436999999997,707.0271);
	ctx.bezierCurveTo(220.47083999999998,704.09993,219.17398999999997,698.98641,219.43811999999997,689.0271);
	ctx.bezierCurveTo(220.80587999999997,637.4536,240.49120999999997,587.13634,251.81311999999997,564.5271);
	ctx.bezierCurveTo(253.43240999999998,561.2934700000001,256.61776,557.94802,259.90686999999997,555.8396);
	ctx.bezierCurveTo(263.19597999999996,553.73118,266.42001,553.1379400000001,267.90686999999997,553.74585);
	ctx.lineTo(269.90686999999997,548.8396);
	ctx.bezierCurveTo(268.86069999999995,548.41189,267.80359999999996,548.16623,266.71932,548.12085);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(312.09432,404.18336);
	ctx.bezierCurveTo(307.34668999999997,404.26496,302.77824999999996,404.93244,298.40682,406.18336);
	ctx.bezierCurveTo(280.92109,411.18705,267.14124999999996,425.26027,260.62557,445.18335);
	ctx.bezierCurveTo(251.18052999999998,474.06362,253.33326,501.13549,260.21932,518.74585);
	ctx.bezierCurveTo(265.89968999999996,533.27278,270.07632,551.75681,264.71932,567.0652200000001);
	ctx.bezierCurveTo(269.21088,566.0071200000001,272.24118999999996,561.51913,271.52452999999997,545.9952300000001);
	ctx.bezierCurveTo(271.10341,536.8731500000001,268.34286999999995,524.9563300000001,265.15682,516.8083500000001);
	ctx.bezierCurveTo(258.81217999999996,500.5826300000001,256.59317999999996,474.5223800000001,265.65682,446.80835000000013);
	ctx.bezierCurveTo(271.72048,428.2673800000001,284.16267999999997,415.7645400000001,299.84432,411.2771100000001);
	ctx.bezierCurveTo(315.52596,406.7896700000001,334.7007,410.27890000000014,354.40682,424.80835000000013);
	ctx.lineTo(354.02732,418.0609900000001);
	ctx.bezierCurveTo(339.659,408.35374000000013,325.25708,403.9571400000001,312.09432,404.1833600000001);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(460.18807,412.40211);
	ctx.lineTo(454.96932,413.43336);
	ctx.bezierCurveTo(459.15837999999997,434.86421,458.81687999999997,465.1802,451.68807,487.3396);
	ctx.bezierCurveTo(443.48395,512.84153,430.9284,529.70716,415.00057,540.68335);
	ctx.bezierCurveTo(399.07273999999995,551.65954,379.66983999999997,557.06463,357.59432,558.0896);
	ctx.bezierCurveTo(324.44701,559.62863,298.92176,545.8999,284.62557,507.3396);
	ctx.bezierCurveTo(289.05554,548.46451,325.96641999999997,565.29148,357.90682,563.37085);
	ctx.bezierCurveTo(380.59209999999996,562.00675,401.04528,556.74258,418.00057,545.05835);
	ctx.bezierCurveTo(434.95586,533.3741200000001,448.26997,515.32597,456.75057,488.9646);
	ctx.bezierCurveTo(464.2888,465.53254000000004,464.56395,434.78874,460.18807,412.40211);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(318.03182,697.18335);
	ctx.bezierCurveTo(318.05462,697.15295,316.70072,698.05778,314.53182,698.55835);
	ctx.bezierCurveTo(312.36292,699.0589200000001,309.49277,699.38053,306.46932,699.55835);
	ctx.bezierCurveTo(300.42242999999996,699.91399,293.68885,699.6593300000001,290.34432,699.2771);
	ctx.lineTo(289.75057,704.55835);
	ctx.bezierCurveTo(293.58793,704.9969100000001,300.33394999999996,705.24823,306.75057,704.87085);
	ctx.bezierCurveTo(309.95887999999997,704.6821600000001,313.07471,704.32496,315.71932,703.7146);
	ctx.bezierCurveTo(318.36393,703.10424,320.65826,702.49393,322.25057,700.37085);
	ctx.lineTo(318.03182,697.18335);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(502.38007,344.88278);
	ctx.bezierCurveTo(503.74649999999997,354.3426,514.15717,359.73488000000003,527.21932,358.40211000000005);
	ctx.bezierCurveTo(529.09783,358.21044000000006,530.51284,358.74710000000005,531.84432,360.12086000000005);
	ctx.bezierCurveTo(533.1758000000001,361.49462000000005,534.2804600000001,363.76798,534.68807,366.68336000000005);
	ctx.bezierCurveTo(535.5033000000001,372.51412000000005,533.57822,380.72630000000004,526.62557,388.49586000000005);
	ctx.bezierCurveTo(515.99045,400.38057000000003,495.11589000000004,408.41504000000003,473.03182000000004,410.46461000000005);
	ctx.bezierCurveTo(445.93186000000003,412.97969000000006,422.81538000000006,406.49051000000003,410.79544000000004,398.15461000000005);
	ctx.bezierCurveTo(420.99440000000004,411.71443000000005,445.3808,418.34883,473.59432000000004,415.7146);
	ctx.bezierCurveTo(496.52219,413.57388000000003,518.4351200000001,405.58006,530.56307,392.02711);
	ctx.bezierCurveTo(538.42749,383.23865,541.0033900000001,373.55282,539.93807,365.93336);
	ctx.bezierCurveTo(539.4054100000001,362.12363,537.96627,358.81613,535.65682,356.43336);
	ctx.bezierCurveTo(533.3473700000001,354.05059,530.0579200000001,352.7962,526.56307,353.15211);
	ctx.bezierCurveTo(511.57779000000005,354.67816999999997,507.46559,352.08544,502.38007000000005,344.88277999999997);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(430.71932,219.12085);
	ctx.bezierCurveTo(424.23742999999996,219.42981,417.78979,220.34972,411.53182,221.87085);
	ctx.bezierCurveTo(386.49996,227.95535999999998,364.39838,244.24732999999998,356.53182,272.12085);
	ctx.bezierCurveTo(347.77853,303.13634,351.90889,338.32225000000005,353.65682,370.27711);
	ctx.bezierCurveTo(355.29310999999996,400.19103,352.04938,431.47234,342.27756999999997,452.0226);
	ctx.bezierCurveTo(356.38113,439.70695,361.16704,401.95053,358.93807,369.90211);
	ctx.bezierCurveTo(356.7091,337.85369,353.26572,303.17976,361.62557,273.55836);
	ctx.bezierCurveTo(368.93825,247.64738,389.14054,232.7736,412.78182,227.0271);
	ctx.bezierCurveTo(436.4231,221.2806,463.36739,224.96738,483.00057,236.3396);
	ctx.bezierCurveTo(501.23438999999996,246.90125999999998,513.15153,264.90632999999997,520.0005699999999,286.08961);
	ctx.bezierCurveTo(526.8496099999999,307.27288,528.5617599999999,331.57139,526.4693199999999,354.18336);
	ctx.lineTo(531.7505699999999,354.65211);
	ctx.bezierCurveTo(533.8994299999999,331.43047,532.1643799999999,306.52477,525.0318199999999,284.46461);
	ctx.bezierCurveTo(517.8992599999999,262.40444,505.2856999999999,243.11558,485.6568199999999,231.74585);
	ctx.bezierCurveTo(469.9018899999999,222.62005,450.1649999999999,218.19396,430.7193199999999,219.12085);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorBody;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(393.80378,250.13832);
	ctx.bezierCurveTo(396.68766,233.54511,395.16061,212.49085,391.05017000000004,199.81493);
	ctx.bezierCurveTo(386.84901,186.85939000000002,375.50203000000005,184.48535,366.28776000000005,194.30057);
	ctx.bezierCurveTo(351.23337000000004,210.33686,330.73460000000006,266.25237,357.57477000000006,296.86473);
	ctx.bezierCurveTo(388.68449000000004,329.5556,403.6879200000001,289.2172,393.8037800000001,250.13832000000002);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(379.84752,186.04919);
	ctx.bezierCurveTo(382.69404,186.38373,385.26315,187.91994,387.36069,190.24956);
	ctx.bezierCurveTo(389.45822,192.57918,391.17256,195.70057,392.6683,199.6193);
	ctx.bezierCurveTo(397.65866,212.69372,401.84484,237.46287,394.23226,258.06448);
	ctx.bezierCurveTo(394.8188,241.07807,392.7704,215.35992,387.73727,201.50736);
	ctx.bezierCurveTo(386.45139,197.96828,384.90186,195.43024,383.43697000000003,193.80326);
	ctx.bezierCurveTo(381.97207000000003,192.17629,380.62643,191.5054,379.21105000000006,191.33905);
	ctx.bezierCurveTo(376.38031000000007,191.00636999999998,372.06227000000007,193.15212,366.71912000000003,199.21258999999998);
	ctx.bezierCurveTo(359.99706000000003,206.83709999999996,351.60934000000003,224.03207999999998,348.72895000000005,243.27077999999997);
	ctx.bezierCurveTo(345.55395000000004,264.47726,349.71422000000007,281.40828,363.37338000000005,303.43285);
	ctx.bezierCurveTo(342.5231600000001,287.91049,340.5197800000001,262.74935,343.50018000000006,242.48714999999999);
	ctx.bezierCurveTo(346.48057000000006,222.22494999999998,354.90691000000004,204.58664,362.73085000000003,195.71231999999998);
	ctx.bezierCurveTo(368.56250000000006,189.09775999999997,374.15445000000005,185.38010999999997,379.84752000000003,186.04918999999998);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(373.27029,206.15048);
	ctx.bezierCurveTo(357.16794,220.44941999999998,347.37053,256.37345999999997,360.50946,268.83826);
	ctx.bezierCurveTo(355.40754,253.36012,362.10787,222.80988,373.27029,206.15048);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorBody;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(335.69824,533.63071);
	ctx.bezierCurveTo(320.60827,584.9946600000001,319.14096,624.48937,318.85076,671.50045);
	ctx.bezierCurveTo(318.68581,698.22281,318.9946,720.71862,337.42303999999996,724.89574);
	ctx.bezierCurveTo(348.30523999999997,727.36238,365.06237999999996,726.79128,379.56523999999996,725.01594);
	ctx.bezierCurveTo(398.29952999999995,722.72262,396.05767999999995,701.37657,391.97363999999993,684.17277);
	ctx.bezierCurveTo(380.4181699999999,635.49594,376.09901999999994,577.05754,378.64663999999993,541.46589);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.lineWidth = 5.300000190734863;
	ctx.beginPath();
	ctx.moveTo(322.60389,584.26719);
	ctx.bezierCurveTo(318.00624,613.58601,316.65691,640.82672,316.46932,671.2146);
	ctx.bezierCurveTo(316.38671999999997,684.59058,316.35609,697.02584,318.84432,707.0271);
	ctx.bezierCurveTo(321.33254999999997,717.02836,326.88298,724.90003,337.09432,727.2146);
	ctx.bezierCurveTo(348.64712,729.83324,364.73897999999997,728.91256,379.37557,727.1209);
	ctx.bezierCurveTo(384.417,726.50376,388.40238,724.9670600000001,391.34432,722.4334);
	ctx.bezierCurveTo(394.28625999999997,719.89974,396.02383,716.4505800000001,396.84432,712.58965);
	ctx.bezierCurveTo(398.4853,704.86779,396.87631999999996,695.2913,394.56307,684.15215);
	ctx.bezierCurveTo(387.67154,650.96669,383.85551999999996,620.73939,382.01529999999997,592.12522);
	ctx.bezierCurveTo(380.87341,574.36965,380.05129,554.65286,379.79400999999996,540.25804);
	ctx.bezierCurveTo(374.99339,550.98091,375.50879999999995,574.67327,376.68105999999995,592.1536100000001);
	ctx.bezierCurveTo(378.6294899999999,621.2076800000001,382.42022999999995,651.75318,389.3755699999999,685.24585);
	ctx.bezierCurveTo(391.6579099999999,696.23621,392.9469399999999,705.42499,391.6568199999999,711.49585);
	ctx.bezierCurveTo(391.0117599999999,714.53128,389.8326899999999,716.71659,387.8755699999999,718.4021);
	ctx.bezierCurveTo(385.91844999999995,720.08761,383.0450399999999,721.34133,378.7193199999999,721.87085);
	ctx.bezierCurveTo(364.35018999999994,723.62982,348.4934199999999,724.3729900000001,338.2818199999999,722.05835);
	ctx.bezierCurveTo(330.0647199999999,720.1958,326.2326099999999,714.7173700000001,324.0005699999999,705.74585);
	ctx.bezierCurveTo(321.76852999999994,696.77433,321.66817999999995,684.59223,321.7505699999999,671.24585);
	ctx.bezierCurveTo(321.9361799999999,641.1772,323.3581999999999,614.38914,327.76690999999994,585.55193);
	ctx.bezierCurveTo(330.23419999999993,569.4135,333.84944999999993,550.93292,340.4072699999999,533.85201);
	ctx.bezierCurveTo(329.74017999999995,547.3888499999999,325.2700999999999,567.26495,322.6038899999999,584.2671899999999);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.fillStyle = colorOutline;
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(527.40725,364.87305);
	ctx.bezierCurveTo(525.3333799999999,372.91209,518.0364999999999,371.19392,514.18647,367.75503);
	ctx.bezierCurveTo(518.035,380.18706,530.0814799999999,375.68733999999995,527.40725,364.87305);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	ctx.restore();
	ctx.restore();
	
	if(typeof(callback) != "undefined" & callback != '')
		callback();
		
};