---
title: 법인카드 미정산건
author: jhyung91
date: 2019-04-30
category: 시작하기
layout: post
---

<h2 style="text-align:center; font-weight:700; letter-spacing:-0.5px; margin-bottom:4px;">법인카드 미정산건 SAP 전표 작성</h2>
<p style="text-align:center; color:#aaa; font-size:0.82em; margin-top:0; letter-spacing:0.05em;">T-CODE : F-63 · 회계팀</p>

---

<div style="background:#fff3e0; border-left:4px solid #e6940a; border-radius:0 8px 8px 0; padding:12px 18px; margin-bottom:2em; font-size:0.9em; color:#7a5a1a;">
  ⚠️ 법인카드 마감기한이 지난 미정산 사용내역은 <strong>비즈플레이 처리 불가</strong>로, SAP에서 직접 전표를 작성합니다.
</div>

---

<h3 id="헤더" style="text-align:center; color:#4a6a8a; font-weight:700; margin-bottom:12px;">STEP 1. 전표 헤더 입력</h3>

<div style="background:#f7f9fb; border:1px solid #eceef1; border-radius:10px; padding:16px 20px; margin-bottom:10px; font-size:0.93em; color:#333;">
  <div style="margin-bottom:8px;">T-CODE : <strong style="color:#4a6a8a;">F-63</strong> &nbsp;(송장임시저장-일반)</div>
  <ul style="margin:0; padding-left:1.4em; line-height:2;">
    <li><strong>증빙일 = 전기일 = 기간(月)</strong> 동일하게 기재</li>
    <li>참조 : <strong>부서명 / 작성자명</strong> &nbsp;<span style="color:#888; font-size:0.9em;">(예: 회계팀/홍주형)</span></li>
    <li>전표헤더텍스트 : <strong>법인카드미정산건(OO월)</strong></li>
    <li>전기키 <strong>31</strong> / 계정 : <strong>LD + 카드번호 뒤 8자리</strong></li>
  </ul>
</div>

<img src="{{ site.baseurl }}/assets/images/corp-card-manual/s01_header.png" alt="전표 헤더 입력" style="max-width:100%; border-radius:8px; box-shadow:0 1px 6px rgba(0,0,0,0.1); margin-bottom:2em;">

---

<h3 id="매입채무" style="text-align:center; color:#4a6a8a; font-weight:700; margin-bottom:12px;">STEP 2. 매입채무 계정 입력 (전기키 31)</h3>

<div style="background:#f7f9fb; border:1px solid #eceef1; border-radius:10px; padding:16px 20px; margin-bottom:10px; font-size:0.93em; color:#333;">
  <ul style="margin:0; padding-left:1.4em; line-height:2;">
    <li>금액 : 카드 사용 <strong>총액 (부가세 포함)</strong></li>
    <li>지급 방법 : <strong>T</strong></li>
    <li>텍스트 : <strong>OO월 법인카드 미정산건(사용내용)</strong></li>
  </ul>
</div>

<img src="{{ site.baseurl }}/assets/images/corp-card-manual/s02_vendor.png" alt="공급업체 항목 입력" style="max-width:100%; border-radius:8px; box-shadow:0 1px 6px rgba(0,0,0,0.1); margin-bottom:1em;">

<div style="background:#fff3e0; border-left:4px solid #e6940a; border-radius:0 8px 8px 0; padding:10px 14px; margin-bottom:10px; font-size:0.9em; color:#7a5a1a;">
  ⚠️ <strong>파트너 은행</strong>을 클릭하여 등록 계좌와 실제 입금 요청 계좌가 동일한지 반드시 확인하세요.
</div>

<img src="{{ site.baseurl }}/assets/images/corp-card-manual/s03_bank.png" alt="파트너 은행 계좌 확인" style="max-width:100%; border-radius:8px; box-shadow:0 1px 6px rgba(0,0,0,0.1); margin-bottom:2em;">

---

<h3 id="부가세" style="text-align:center; color:#4a6a8a; font-weight:700; margin-bottom:12px;">STEP 3. 부가가치세 항목 입력 (전기키 40)</h3>

<div style="background:#f7f9fb; border:1px solid #eceef1; border-radius:10px; padding:16px 20px; margin-bottom:10px; font-size:0.93em; color:#333;">
  <ul style="margin:0; padding-left:1.4em; line-height:2;">
    <li>전기키 <strong>40</strong> / 계정 : <strong>11161100</strong> (선급부가가치세)</li>
    <li>금액 : 카드영수증의 <strong>부가세</strong></li>
    <li>기본금액 : 카드영수증의 <strong>공급가액</strong></li>
    <li>세금코드 : <strong>V5</strong></li>
  </ul>
</div>

<img src="{{ site.baseurl }}/assets/images/corp-card-manual/s04_vat.png" alt="부가가치세 항목 입력" style="max-width:100%; border-radius:8px; box-shadow:0 1px 6px rgba(0,0,0,0.1); margin-bottom:2em;">

---

<h3 id="비용" style="text-align:center; color:#4a6a8a; font-weight:700; margin-bottom:12px;">STEP 4. 비용 계정 입력 (전기키 40)</h3>

<div style="background:#f7f9fb; border:1px solid #eceef1; border-radius:10px; padding:16px 20px; margin-bottom:10px; font-size:0.93em; color:#333;">
  <ul style="margin:0; padding-left:1.4em; line-height:2;">
    <li>전기키 <strong>40</strong> / 계정 : 해당 <strong>비용 계정</strong> 선택</li>
    <li>금액 : 총액 <strong>– 부가세</strong> (공급가액)</li>
    <li>코스트센터 : 해당 부서 코스트센터 입력</li>
    <li>텍스트 : <strong>OO월 법인카드 미정산건(사용내용)</strong></li>
  </ul>
</div>

<img src="{{ site.baseurl }}/assets/images/corp-card-manual/s05_cost.png" alt="비용 계정 입력" style="max-width:100%; border-radius:8px; box-shadow:0 1px 6px rgba(0,0,0,0.1); margin-bottom:2em;">

---

<h3 id="개요" style="text-align:center; color:#3d6e47; font-weight:700; margin-bottom:12px;">STEP 5. 개요 확인 후 저장</h3>

<div style="background:#f6faf7; border:1px solid #eaeeeb; border-radius:10px; padding:16px 20px; margin-bottom:10px; font-size:0.93em; color:#333;">
  <ul style="margin:0; padding-left:1.4em; line-height:2;">
    <li>차변(D) 합계 = 대변(C) 합계 확인</li>
    <li>항목 3건 (공급업체 / 선급부가가치세 / 비용계정) 확인</li>
    <li>이상 없으면 <strong style="color:#3d6e47;">전표 → 완료</strong>로 저장</li>
  </ul>
</div>

<img src="{{ site.baseurl }}/assets/images/corp-card-manual/s06_overview.png" alt="전표 개요 확인" style="max-width:100%; border-radius:8px; box-shadow:0 1px 6px rgba(0,0,0,0.1); margin-bottom:1em;">
