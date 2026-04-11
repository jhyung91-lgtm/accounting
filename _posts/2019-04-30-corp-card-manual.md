---
title: 법인카드 미정산건 전표작성
author: jhyung91
date: 2019-04-30
category: 시작하기
layout: post
---

<h2 style="text-align:center; font-weight:700; letter-spacing:-0.5px; margin-bottom:4px;">법인카드 미정산건 SAP 전표 작성</h2>
<p style="text-align:center; color:#aaa; font-size:0.82em; margin-top:0; letter-spacing:0.05em;">T-CODE : F-63 · 회계팀</p>

---

<div style="background:#fff3e0; border-left:4px solid #e6940a; border-radius:0 8px 8px 0; padding:12px 18px; margin-bottom:1.6em; font-size:0.9em; color:#7a5a1a;">
  ⚠️ 법인카드 마감기한이 지난 미정산 사용내역은 <strong>비즈플레이 처리 불가</strong>로, SAP에서 직접 전표를 작성합니다.
</div>

---

<h3 id="헤더" style="text-align:center; color:#4a6a8a; font-weight:700; margin-bottom:12px;">1. 전표 헤더 입력</h3>

<div style="border-radius:10px; overflow:hidden; box-shadow:0 1px 8px rgba(0,0,0,0.07); margin-bottom:1em;">
  <div style="background:#7a90a8; color:#fff; padding:12px 20px; font-weight:600; font-size:0.95em;">
    T-CODE : <strong style="font-size:1.05em;">F-63</strong> &nbsp;(송장임시저장-일반)
  </div>
  <div style="background:#f7f9fb; padding:16px 20px; border:1px solid #eceef1; border-top:none; border-radius:0 0 10px 10px; font-size:0.93em; color:#333;">
    <div style="overflow-x:auto; border-radius:8px; margin-bottom:14px;">
    <table style="width:100%; border-collapse:collapse; font-size:0.9em;">
      <thead>
        <tr style="background:#7a90a8; color:#fff;">
          <th style="padding:8px 14px; text-align:center; width:160px;">항목</th>
          <th style="padding:8px 14px; text-align:center;">입력 방법</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #eceef1; background:#f7f9fb;">
          <td style="padding:8px 14px; text-align:center; font-weight:600; color:#4a6a8a;">증빙일 / 전기일 / 기간</td>
          <td style="padding:8px 14px; text-align:center;"><strong>세 항목 모두 동일</strong>하게 기재</td>
        </tr>
        <tr style="border-bottom:1px solid #eceef1;">
          <td style="padding:8px 14px; text-align:center; font-weight:600; color:#4a6a8a;">참조</td>
          <td style="padding:8px 14px; text-align:center;">작성자부서 / 작성자명 <span style="color:#888; font-size:0.88em;">(예: 회계팀/홍주형)</span></td>
        </tr>
        <tr style="border-bottom:1px solid #eceef1; background:#f7f9fb;">
          <td style="padding:8px 14px; text-align:center; font-weight:600; color:#4a6a8a;">전표헤더텍스트</td>
          <td style="padding:8px 14px; text-align:center;">법인카드미정산건(OO월) <span style="color:#888; font-size:0.88em;">(예: 법인카드미정산건(03월))</span></td>
        </tr>
        <tr>
          <td style="padding:8px 14px; text-align:center; font-weight:600; color:#4a6a8a;">전기키 / 계정</td>
          <td style="padding:8px 14px; text-align:center;">전기키 <strong>31</strong> / 계정 : <strong>LD + 법인카드 번호 뒤 8자리</strong></td>
        </tr>
      </tbody>
    </table>
    </div>
    <img src="{{ site.baseurl }}/assets/images/corp-card-manual/page_01.png" alt="전표 헤더 및 공급업체 항목 입력" style="max-width:100%; border-radius:8px; box-shadow:0 1px 6px rgba(0,0,0,0.1);">
  </div>
</div>

---

<h3 id="매입채무" style="text-align:center; color:#4a6a8a; font-weight:700; margin-bottom:12px;">2. 매입채무 계정 입력 (전기키 31)</h3>

<div style="border-radius:10px; overflow:hidden; box-shadow:0 1px 8px rgba(0,0,0,0.07); margin-bottom:1em;">
  <div style="background:#7a90a8; color:#fff; padding:12px 20px; font-weight:600; font-size:0.95em;">
    변경 공급업체 항목
  </div>
  <div style="background:#f7f9fb; padding:16px 20px; border:1px solid #eceef1; border-top:none; border-radius:0 0 10px 10px; font-size:0.93em; color:#333;">
    <ul style="margin:0 0 14px 0; padding-left:1.4em; line-height:1.9;">
      <li>금액 : 카드 사용 <strong>총액 (부가세 포함)</strong></li>
      <li>지급 방법 : <strong>T</strong></li>
      <li>텍스트 : OO월 법인카드 미정산건(사용내용) <span style="color:#888;">(예: 3월 법인카드 미정산건(식대))</span></li>
      <li>파트너 은행 클릭 → 등록된 계좌 선택 <strong style="color:#c0392b;">(계좌번호 반드시 확인)</strong></li>
    </ul>
  </div>
</div>

---

<h3 id="부가세" style="text-align:center; color:#4a6a8a; font-weight:700; margin-bottom:12px;">3. 부가가치세 항목 입력 (전기키 40)</h3>

<div style="border-radius:10px; overflow:hidden; box-shadow:0 1px 8px rgba(0,0,0,0.07); margin-bottom:1em;">
  <div style="background:#7a90a8; color:#fff; padding:12px 20px; font-weight:600; font-size:0.95em;">
    변경 G/L 계정 항목
  </div>
  <div style="background:#f7f9fb; padding:16px 20px; border:1px solid #eceef1; border-top:none; border-radius:0 0 10px 10px; font-size:0.93em; color:#333;">
    <ul style="margin:0 0 14px 0; padding-left:1.4em; line-height:1.9;">
      <li>전기키 <strong>40</strong> / 계정 : <strong>11161100</strong> (선급부가가치세)</li>
      <li>금액 : 카드영수증의 <strong>부가세</strong></li>
      <li>기본금액 : 카드영수증의 <strong>공급가액</strong></li>
      <li>세금코드 : <strong>V5</strong></li>
    </ul>
    <img src="{{ site.baseurl }}/assets/images/corp-card-manual/page_02.png" alt="G/L 계정 및 비용 계정 입력" style="max-width:100%; border-radius:8px; box-shadow:0 1px 6px rgba(0,0,0,0.1);">
  </div>
</div>

---

<h3 id="비용" style="text-align:center; color:#4a6a8a; font-weight:700; margin-bottom:12px;">4. 비용 계정 입력 (전기키 40)</h3>

<div style="border-radius:10px; overflow:hidden; box-shadow:0 1px 8px rgba(0,0,0,0.07); margin-bottom:1em;">
  <div style="background:#7a90a8; color:#fff; padding:12px 20px; font-weight:600; font-size:0.95em;">
    입력 G/L 계정 항목
  </div>
  <div style="background:#f7f9fb; padding:16px 20px; border:1px solid #eceef1; border-top:none; border-radius:0 0 10px 10px; font-size:0.93em; color:#333;">
    <ul style="margin:0 0 0 0; padding-left:1.4em; line-height:1.9;">
      <li>전기키 <strong>40</strong> / 계정 : 해당 <strong>비용 계정</strong> 선택</li>
      <li>금액 : 총액 <strong>– 부가가치세</strong> (공급가액)</li>
      <li>코스트센터 : 해당 부서 코스트센터 입력</li>
      <li>텍스트 : OO월 법인카드 미정산건(사용내용)</li>
    </ul>
  </div>
</div>

---

<h3 id="개요" style="text-align:center; color:#3d6e47; font-weight:700; margin-bottom:12px;">5. 개요 확인 후 저장</h3>

<div style="border-radius:10px; overflow:hidden; box-shadow:0 1px 8px rgba(0,0,0,0.07); margin-bottom:1em;">
  <div style="background:#7a9c82; color:#fff; padding:12px 20px; font-weight:600; font-size:0.95em;">
    전표 임시전기: 개요
  </div>
  <div style="background:#f6faf7; padding:16px 20px; border:1px solid #eaeeeb; border-top:none; border-radius:0 0 10px 10px; font-size:0.93em; color:#333;">
    <ul style="margin:0 0 14px 0; padding-left:1.4em; line-height:1.9;">
      <li>차변(D) 합계 = 대변(C) 합계 확인</li>
      <li>항목 내역 (공급업체 / 선급부가가치세 / 비용계정) 최종 확인</li>
      <li>이상 없으면 <strong style="color:#3d6e47;">전표 → 완료</strong>로 저장</li>
    </ul>
    <img src="{{ site.baseurl }}/assets/images/corp-card-manual/page_03.png" alt="전표 개요 화면" style="max-width:100%; border-radius:8px; box-shadow:0 1px 6px rgba(0,0,0,0.1);">
  </div>
</div>
