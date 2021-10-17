<h2>1221. Split a String in B<em class="Highlight" match="ala" loopnumber="619971264" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); font-style: inherit;">ala</em>nced Strings</h2><h3>Easy</h3><hr><div><p><strong>B<em class="Highlight" match="ala" loopnumber="619971264" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); font-style: inherit;">ala</em>nced</strong> strings are those that have an equal quantity of <code>'L'</code> and <code>'R'</code> characters.</p>

<p>Given a <strong>b<em class="Highlight" match="ala" loopnumber="619971264" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); font-style: inherit;">ala</em>nced</strong> string <code>s</code>, split it in the maximum amount of b<em class="Highlight" match="ala" loopnumber="619971264" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); font-style: inherit;">ala</em>nced strings.</p>

<p>Return <em>the maximum amount of split <strong>b<em class="Highlight" match="ala" loopnumber="619971264" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); font-style: inherit;">ala</em>nced</strong> strings</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "RLRRLLRLRL"
<strong>Output:</strong> 4
<strong>Explanation: </strong>s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "RLLLLRRRLR"
<strong>Output:</strong> 3
<strong>Explanation: </strong>s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "LLLLRRRR"
<strong>Output:</strong> 1
<strong>Explanation: </strong>s can be split into "LLLLRRRR".
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> s = "RLRRRLLRLL"
<strong>Output:</strong> 2
<strong>Explanation: </strong>s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s[i]</code> is either <code>'L'</code> or <code>'R'</code>.</li>
	<li><code>s</code> is a <strong>b<em class="Highlight" match="ala" loopnumber="619971264" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); font-style: inherit;">ala</em>nced</strong> string.</li>
</ul>
</div>