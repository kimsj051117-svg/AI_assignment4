const noteStorageKey = "lablogResearchNotes";
const templateStorageKey = "lablogExperimentTemplates";
const recordStorageKey = "lablogExperimentRecords";
const projectStorageKey = "lablogResearchProjects";
const literatureStorageKey = "lablogLiteratureArchive";
const resultStorageKey = "lablogResultArchive";

const starterVariables = [
  ["Experiment Type", "Solvothermal synthesis"],
  ["Precursor", "Metal nitrate"],
  ["Solvent", "Ethanol"],
  ["Concentration", "0.1 M"],
  ["Reaction Temperature", "80 C"],
  ["Hotplate Temperature", "90 C"],
  ["Water Bath Temperature", "60 C"],
  ["Reaction Time", "2 h"],
  ["Washing Condition", "DI water 3 times"],
  ["Drying Condition", "60 C oven, 12 h"],
  ["Dispersion Solvent", "Ethanol"],
  ["Memo", "Use as a baseline condition."]
];

const legacyConditionDefinitions = [
  ["experimentType", "Experiment Type"],
  ["precursor", "Precursor"],
  ["solvent", "Solvent"],
  ["concentration", "Concentration"],
  ["reactionTemperature", "Reaction Temperature"],
  ["hotplateTemperature", "Hotplate Temperature"],
  ["waterBathTemperature", "Water Bath Temperature"],
  ["reactionTime", "Reaction Time"],
  ["washingCondition", "Washing Condition"],
  ["dryingCondition", "Drying Condition"],
  ["dispersionSolvent", "Dispersion Solvent"],
  ["conditionMemo", "Memo"]
];

const defaultNotes = [
  {
    id: 1,
    title: "Ni 촉매 반응 조건 정리",
    project: "유기 합성 최적화",
    date: "2026-06-12",
    goals: "온도와 반응 시간 변화에 따른 수율 비교",
    status: "진행 중",
    memo: "60도 조건에서 부산물이 감소했다. 다음 실험에서는 용매를 변경해 비교한다.",
    literature: "Lee 2025 catalyst review",
    keywords: "Ni catalyst, yield, solvent"
  }
];

const defaultTemplates = [
  {
    id: 1,
    name: "기본 합성 조건",
    variables: starterVariables.map(([name, value]) => ({ name, value }))
  }
];

const defaultProjects = [
  {
    id: 1,
    title: "유기 합성 최적화",
    field: "Organic Chemistry",
    objective: "반응 조건 변화에 따른 수율과 부산물 발생 경향을 비교한다.",
    startDate: "2026-06-01",
    status: "진행 중",
    keywords: "촉매, 수율, 용매",
    memo: "기본 합성 조건을 기준으로 온도와 용매를 우선 비교한다."
  }
];

const defaultLiterature = [
  {
    id: 1,
    title: "Catalyst screening for selective synthesis",
    authors: "Lee, Kim",
    year: "2025",
    source: "Journal of Student Research",
    url: "https://example.com",
    project: "유기 합성 최적화",
    keywords: "catalyst, selectivity",
    summary: "촉매 종류에 따른 선택도 차이를 비교한 논문.",
    notes: "실험 조건 템플릿의 catalyst 변수 설계에 참고."
  }
];

const defaultResults = [
  {
    id: 1,
    title: "Baseline synthesis yield",
    project: "유기 합성 최적화",
    date: "2026-06-12",
    mainVariable: "Reaction Temperature",
    value: "82",
    unit: "%",
    summary: "기본 조건에서 안정적인 수율을 확인했다.",
    interpretation: "온도 80 C 조건이 기준점으로 적합하다.",
    nextAction: "90 C 조건과 용매 변경 조건을 비교한다."
  }
];

const situationTemplates = [
  {
    name: "일반 실험 노트 템플릿",
    description: "가장 기본적인 실험 기록에 사용할 수 있는 범용 템플릿입니다.",
    useCase: "반복 실험, 수업 실험, 간단한 조건 비교 실험",
    fields: ["실험 목적", "가설", "실험 조건", "실험 절차", "관찰 내용", "결과", "결론", "다음 실험 계획"]
  },
  {
    name: "합성 실험 템플릿",
    description: "재료 합성, 화학 합성, 나노입자 합성 실험에 적합합니다.",
    useCase: "전구체, 용매, 온도, 시간, 생성물 분석이 중요한 합성 실험",
    fields: ["합성 목표", "전구체 / 시약", "용매", "농도", "반응 온도", "반응 시간", "교반 속도", "분위기 조건", "합성 과정", "관찰 내용", "수득물 / 생성물", "결과 분석", "다음 조건 제안"]
  },
  {
    name: "측정 / 분석 실험 템플릿",
    description: "분석 장비를 사용한 특성 평가나 측정 결과 정리에 적합합니다.",
    useCase: "XRD, SEM, UV-Vis, 전기화학 측정, 물성 분석",
    fields: ["측정 목적", "샘플 이름", "측정 장비", "측정 조건", "측정 파라미터", "원본 데이터 위치", "주요 결과값", "결과 해석", "재측정 필요 여부", "다음 분석 계획"]
  },
  {
    name: "소자 제작 템플릿",
    description: "박막, 전극, 센서, 태양전지 등 소자 제작 과정을 기록하기 좋습니다.",
    useCase: "기판, 층별 재료, 공정 조건, 성능 결과가 중요한 제작 실험",
    fields: ["소자 구조", "기판 정보", "층별 재료", "공정 조건", "열처리 조건", "제작 과정", "관찰된 문제점", "소자 성능 결과", "개선 방향"]
  },
  {
    name: "조건 최적화 템플릿",
    description: "여러 변수를 비교해 가장 좋은 조건을 찾는 실험에 적합합니다.",
    useCase: "온도, 시간, 농도, 용매 등 변수를 바꿔가며 비교하는 실험",
    fields: ["최적화 목표", "고정 변수", "변경 변수", "실험 조건표", "비교 기준", "결과 요약", "가장 좋은 조건", "해석", "다음 실험 계획"]
  },
  {
    name: "문헌 기반 실험 계획 템플릿",
    description: "논문 조건을 바탕으로 새로운 실험 계획을 세울 때 사용합니다.",
    useCase: "문헌 재현 실험, 논문 조건 변형, 선행연구 기반 실험 설계",
    fields: ["참고 문헌", "논문에서 사용한 조건", "내가 적용할 조건", "변경할 변수", "예상 결과", "실험 계획", "주의할 점"]
  }
];

const mainContent = document.querySelector("#mainContent");
const itemCount = document.querySelector("#itemCount");
const summaryGrid = document.querySelector("#summaryGrid");
const pageTitle = document.querySelector("#pageTitle");
const pageEyebrow = document.querySelector("#pageEyebrow");
const globalControls = document.querySelector("#globalControls");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const sortSelect = document.querySelector("#sortSelect");
const recordViewMode = document.querySelector("#recordViewMode");
const openModalButton = document.querySelector("#openModalButton");
const noteModal = document.querySelector("#noteModal");
const noteForm = document.querySelector("#noteForm");
const modalTitle = document.querySelector("#modalTitle");
const noteProjectSelect = document.querySelector("#noteProjectSelect");
const templateSelect = document.querySelector("#templateSelect");
const situationTemplateSelect = document.querySelector("#situationTemplateSelect");
const conditionFields = document.querySelector("#conditionFields");
const changedCount = document.querySelector("#changedCount");
const existingAttachments = document.querySelector("#existingAttachments");
const selectedSituationTemplate = document.querySelector("#selectedSituationTemplate");
const situationTemplateFields = document.querySelector("#situationTemplateFields");
const tabs = document.querySelectorAll(".tab");
const sidebarLinks = document.querySelectorAll("[data-view-link]");
const viewTitle = document.querySelector("#viewTitle");

let notes = JSON.parse(localStorage.getItem(noteStorageKey)) || defaultNotes;
let templates = (JSON.parse(localStorage.getItem(templateStorageKey)) || defaultTemplates).map(normalizeTemplate);
let experimentRecords = (JSON.parse(localStorage.getItem(recordStorageKey)) || []).map(normalizeRecord);
let projects = JSON.parse(localStorage.getItem(projectStorageKey)) || defaultProjects;
let literatureRecords = JSON.parse(localStorage.getItem(literatureStorageKey)) || defaultLiterature;
let resultRecords = JSON.parse(localStorage.getItem(resultStorageKey)) || defaultResults;
let activeView = "notes";
let editingProjectId = null;
let editingLiteratureId = null;
let editingResultId = null;

function saveAll() {
  localStorage.setItem(noteStorageKey, JSON.stringify(notes));
  localStorage.setItem(templateStorageKey, JSON.stringify(templates));
  localStorage.setItem(recordStorageKey, JSON.stringify(experimentRecords));
  localStorage.setItem(projectStorageKey, JSON.stringify(projects));
  localStorage.setItem(literatureStorageKey, JSON.stringify(literatureRecords));
  localStorage.setItem(resultStorageKey, JSON.stringify(resultRecords));
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateString) {
  if (!dateString) {
    return "날짜 없음";
  }

  return new Date(`${dateString}T00:00:00`).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function splitTags(value) {
  return String(value || "").split(",").map((tag) => tag.trim()).filter(Boolean);
}

function statusClass(status) {
  return {
    "진행 중": "status-progress",
    "완료": "status-done",
    "보류": "status-hold",
    "검토 필요": "status-review",
    "계획 중": "status-hold",
    "Planning": "status-hold",
    "In Progress": "status-progress",
    "Completed": "status-done"
  }[status] || "status-progress";
}

function normalizeProjectStatus(status) {
  return {
    Planning: "계획 중",
    "In Progress": "진행 중",
    Completed: "완료"
  }[status] || status || "진행 중";
}

function normalizeTemplate(template) {
  if (Array.isArray(template.variables)) {
    return {
      id: template.id,
      name: template.name || "이름 없는 템플릿",
      variables: template.variables
        .map((variable) => ({
          name: String(variable.name || "").trim(),
          value: String(variable.value || "").trim()
        }))
        .filter((variable) => variable.name)
    };
  }

  return {
    id: template.id,
    name: template.name || "이름 없는 템플릿",
    variables: legacyConditionDefinitions
      .map(([key, label]) => ({ name: label, value: String(template[key] || "").trim() }))
      .filter((variable) => variable.value)
  };
}

function normalizeRecord(record) {
  return {
    ...record,
    originalDefaults: normalizeConditionList(record.originalDefaults),
    finalConditions: normalizeConditionList(record.finalConditions),
    attachments: Array.isArray(record.attachments) ? record.attachments : [],
    changedVariables: Array.isArray(record.changedVariables)
      ? record.changedVariables.map((change) => ({
          name: change.name || change.label || "",
          from: change.from || "",
          to: change.to || ""
        }))
      : []
  };
}

function normalizeConditionList(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => ({
        name: String(item.name || item.label || "").trim(),
        value: String(item.value || "").trim()
      }))
      .filter((item) => item.name);
  }

  if (value && typeof value === "object") {
    return Object.entries(value)
      .map(([key, itemValue]) => ({
        name: legacyConditionDefinitions.find(([legacyKey]) => legacyKey === key)?.[1] || key,
        value: String(itemValue || "").trim()
      }))
      .filter((item) => item.name && item.value);
  }

  return [];
}

function getTemplateById(id) {
  return templates.find((template) => String(template.id) === String(id));
}

function conditionMap(conditions) {
  const map = new Map();
  conditions.forEach((condition) => {
    if (condition.name) {
      map.set(condition.name.trim().toLowerCase(), condition);
    }
  });
  return map;
}

function getConditionListFromRows(container) {
  return [...container.querySelectorAll(".variable-row")]
    .map((row) => ({
      name: row.querySelector("[data-variable-name]").value.trim(),
      value: row.querySelector("[data-variable-value]").value.trim()
    }))
    .filter((variable) => variable.name);
}

function getConditionListFromForm() {
  return getConditionListFromRows(conditionFields);
}

function getChangedVariables(originalConditions, finalConditions) {
  const originalMap = conditionMap(originalConditions);
  const finalMap = conditionMap(finalConditions);
  const keys = new Set([...originalMap.keys(), ...finalMap.keys()]);

  return [...keys].map((key) => {
    const original = originalMap.get(key);
    const final = finalMap.get(key);
    const name = final?.name || original?.name || key;
    return {
      name,
      from: original?.value || "",
      to: final?.value || ""
    };
  }).filter((change) => change.from !== change.to);
}

function formatFileSize(bytes) {
  if (!bytes) {
    return "0 KB";
  }

  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve({
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name: file.name,
        type: file.type || "application/octet-stream",
        size: file.size,
        addedAt: new Date().toISOString(),
        dataUrl: reader.result
      });
    });
    reader.addEventListener("error", () => {
      resolve({
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name: file.name,
        type: file.type || "application/octet-stream",
        size: file.size,
        addedAt: new Date().toISOString(),
        dataUrl: ""
      });
    });
    reader.readAsDataURL(file);
  });
}

async function readAttachmentFiles(fileList) {
  const files = [...fileList];
  return Promise.all(files.map(readFileAsDataUrl));
}

function renderAttachmentLinks(attachments = []) {
  if (!attachments.length) {
    return '<span class="mini-tag">첨부 없음</span>';
  }

  return attachments.map((file) => {
    const fileLabel = `${escapeHtml(file.name)} · ${formatFileSize(file.size)}`;
    if (!file.dataUrl) {
      return `<span class="mini-tag">${fileLabel}</span>`;
    }

    return `
      <a class="file-chip" href="${file.dataUrl}" download="${escapeHtml(file.name)}">
        ${fileLabel}
      </a>
    `;
  }).join("");
}

function renderExistingAttachments(attachments = []) {
  existingAttachments.innerHTML = attachments.length
    ? `
      <span>저장된 결과 파일</span>
      <div class="tag-row">${renderAttachmentLinks(attachments)}</div>
      <small>새 파일을 선택하면 기존 파일은 유지되고 추가됩니다.</small>
    `
    : "";
}

function getSituationTemplateByName(name) {
  return situationTemplates.find((template) => template.name === name);
}

function renderSituationTemplateFields(templateName = "", values = {}) {
  const template = getSituationTemplateByName(templateName);
  noteForm.elements.situationTemplateName.value = template?.name || "";
  situationTemplateSelect.value = template?.name || "";

  if (!template) {
    selectedSituationTemplate.hidden = true;
    selectedSituationTemplate.innerHTML = "";
    situationTemplateFields.hidden = true;
    situationTemplateFields.innerHTML = "";
    return;
  }

  selectedSituationTemplate.hidden = false;
  selectedSituationTemplate.innerHTML = `
    <strong>적용된 템플릿: ${escapeHtml(template.name)}</strong>
    <span>${escapeHtml(template.description)}</span>
  `;
  situationTemplateFields.hidden = false;
  situationTemplateFields.innerHTML = `
    <div class="condition-header">
      <div>
        <h3>템플릿 세부 항목</h3>
        <p>${escapeHtml(template.useCase)}</p>
      </div>
    </div>
    <div class="template-field-grid">
      ${template.fields.map((field) => `
        <label class="template-field">
          ${escapeHtml(field)}
          <textarea name="situation_${escapeHtml(field)}" rows="2" placeholder="${escapeHtml(field)}을(를) 입력하세요.">${escapeHtml(values[field] || "")}</textarea>
        </label>
      `).join("")}
    </div>
  `;
}

function fillSituationTemplateSelect() {
  situationTemplateSelect.innerHTML = '<option value="">템플릿 선택 안 함</option>' + situationTemplates
    .map((template) => `<option value="${escapeHtml(template.name)}">${escapeHtml(template.name)}</option>`)
    .join("");
}

function getSituationTemplateValues() {
  const templateName = noteForm.elements.situationTemplateName.value;
  const template = getSituationTemplateByName(templateName);
  if (!template) {
    return {};
  }

  return Object.fromEntries(template.fields.map((field) => {
    const fieldElement = noteForm.elements[`situation_${field}`];
    return [field, fieldElement ? fieldElement.value.trim() : ""];
  }));
}

function applySituationTemplate(templateName) {
  const template = getSituationTemplateByName(templateName);
  if (!template) {
    return;
  }

  openModal();
  modalTitle.textContent = "새 실험 기록";
  noteForm.title.value = template.name.replace(" 템플릿", "");
  noteForm.goals.value = template.useCase;
  noteForm.memo.value = `${template.name}이 적용되었습니다. 필요한 항목을 채워 실험 기록을 완성하세요.`;
  renderSituationTemplateFields(template.name);
  setActiveView("notes");
  noteModal.scrollIntoView({ behavior: "smooth", block: "center" });
  selectedSituationTemplate.insertAdjacentHTML("beforeend", `<em>${escapeHtml(template.name)}이 적용되었습니다.</em>`);
}

function createVariableRow(variable = {}, options = {}) {
  const row = document.createElement("div");
  row.className = "variable-row";
  row.innerHTML = `
    <label>
      변수명
      <input data-variable-name type="text" value="${escapeHtml(variable.name || "")}" placeholder="예: Reaction Time">
    </label>
    <label>
      기본값 / 실험값
      <input data-variable-value type="text" value="${escapeHtml(variable.value || "")}" placeholder="예: 2 h">
    </label>
    <span class="changed-label" hidden>수정됨</span>
    <button class="small-button" type="button" data-remove-variable>삭제</button>
  `;

  row.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", options.onChange || (() => {}));
  });

  row.querySelector("[data-remove-variable]").addEventListener("click", () => {
    row.remove();
    if (options.onChange) {
      options.onChange();
    }
  });

  return row;
}

function renderConditionRows(variables = []) {
  conditionFields.innerHTML = "";
  const list = variables.length ? variables : [{ name: "", value: "" }];

  list.forEach((variable) => {
    conditionFields.appendChild(createVariableRow(variable, { onChange: updateChangedMarkers }));
  });

  const addButton = document.createElement("button");
  addButton.className = "ghost-button full";
  addButton.type = "button";
  addButton.textContent = "조건 변수 추가";
  addButton.addEventListener("click", () => {
    conditionFields.insertBefore(createVariableRow({}, { onChange: updateChangedMarkers }), addButton);
    updateChangedMarkers();
  });
  conditionFields.appendChild(addButton);
  updateChangedMarkers();
}

function fillTemplateSelect() {
  templateSelect.innerHTML = '<option value="">템플릿 없이 작성</option>' + templates
    .map((template) => `<option value="${template.id}">${escapeHtml(template.name)}</option>`)
    .join("");
}

function fillProjectSelect(selectedProject = "") {
  const projectNames = [...new Set(projects.map((project) => project.title).filter(Boolean))];
  noteProjectSelect.innerHTML = '<option value="">프로젝트 선택 안 함</option>' + projectNames
    .map((title) => `<option value="${escapeHtml(title)}">${escapeHtml(title)}</option>`)
    .join("");

  if (selectedProject && !projectNames.includes(selectedProject)) {
    const option = document.createElement("option");
    option.value = selectedProject;
    option.textContent = selectedProject;
    noteProjectSelect.appendChild(option);
  }

  noteProjectSelect.value = selectedProject || "";
}

function renderProjectOptions(selectedProject = "") {
  const projectNames = [...new Set(projects.map((project) => project.title).filter(Boolean))];
  const options = ['<option value="">프로젝트 선택 안 함</option>']
    .concat(projectNames.map((title) => `<option value="${escapeHtml(title)}" ${title === selectedProject ? "selected" : ""}>${escapeHtml(title)}</option>`));

  if (selectedProject && !projectNames.includes(selectedProject)) {
    options.push(`<option value="${escapeHtml(selectedProject)}" selected>${escapeHtml(selectedProject)}</option>`);
  }

  return options.join("");
}

function getSelectedOriginalConditions() {
  return getTemplateById(templateSelect.value)?.variables || [];
}

function updateChangedMarkers() {
  const originalConditions = getSelectedOriginalConditions();
  const finalConditions = getConditionListFromForm();
  const changes = getChangedVariables(originalConditions, finalConditions);
  const changedKeys = new Set(changes.map((change) => change.name.trim().toLowerCase()));

  conditionFields.querySelectorAll(".variable-row").forEach((row) => {
    const name = row.querySelector("[data-variable-name]").value.trim().toLowerCase();
    const isChanged = Boolean(templateSelect.value) && changedKeys.has(name);
    row.classList.toggle("is-changed", isChanged);
    row.querySelector(".changed-label").hidden = !isChanged;
  });

  changedCount.textContent = `변경 ${templateSelect.value ? changes.length : 0}개`;
}

function getFilteredNotes() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;

  return notes
    .filter((note) => {
      const matchesSearch =
        String(note.title || "").toLowerCase().includes(query) ||
        String(note.memo || "").toLowerCase().includes(query);
      const matchesStatus = selectedStatus === "all" || note.status === selectedStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => sortSelect.value === "oldest"
      ? String(a.date || "").localeCompare(String(b.date || ""))
      : String(b.date || "").localeCompare(String(a.date || "")));
}

function getLinkedExperimentRecord(note) {
  return note?.experimentRecordId
    ? experimentRecords.find((record) => String(record.id) === String(note.experimentRecordId))
    : null;
}

function groupRecords(records, groupBy) {
  return records.reduce((groups, note) => {
    const linkedRecord = getLinkedExperimentRecord(note);
    let groupName = "미분류";

    if (groupBy === "project") {
      groupName = note.project || "미분류";
    }

    if (groupBy === "title") {
      groupName = note.title || "제목 없는 실험";
    }

    if (groupBy === "mainVariable") {
      groupName = linkedRecord?.changedVariables?.[0]?.name || "변경 변수 없음";
    }

    if (!groups[groupName]) {
      groups[groupName] = [];
    }

    groups[groupName].push(note);
    return groups;
  }, {});
}

function calculateGroupSummary(groupRecords) {
  const numericResults = groupRecords
    .map((note) => Number.parseFloat(getLinkedExperimentRecord(note)?.result || note.result))
    .filter((value) => Number.isFinite(value));
  const averageResult = numericResults.length
    ? (numericResults.reduce((sum, value) => sum + value, 0) / numericResults.length).toFixed(2)
    : "해당 없음";
  const latestDate = groupRecords
    .map((note) => note.date)
    .filter(Boolean)
    .sort()
    .at(-1);

  return {
    count: groupRecords.length,
    latestDate: latestDate ? formatDate(latestDate) : "날짜 없음",
    averageResult
  };
}

function renderRecordCard(note) {
  const linkedRecord = getLinkedExperimentRecord(note);

  return `
    <article class="record-card-mini">
      <div class="card-top">
        <div>
          <h3>${escapeHtml(note.title)}</h3>
          <div class="meta">${escapeHtml(note.project || "미분류")} · ${formatDate(note.date)}</div>
        </div>
        <div class="form-actions">
          <button class="small-button" type="button" data-edit-note="${note.id}">수정</button>
          <button class="small-button" type="button" data-duplicate-note="${note.id}">복제</button>
        </div>
      </div>
      <div class="card-field">
        <span>사용 템플릿</span>
        <p>${escapeHtml(note.situationTemplateName || linkedRecord?.situationTemplateName || linkedRecord?.templateName || note.templateName || "템플릿 없음")}</p>
      </div>
      <div class="card-field">
        <span>변경 변수</span>
        <div class="tag-row">${renderChangedVariables(linkedRecord?.changedVariables || [])}</div>
      </div>
      <div class="card-field">
        <span>최종 조건</span>
        <div>${renderFinalConditions(linkedRecord?.finalConditions || [])}</div>
      </div>
      <div class="card-field">
        <span>결과</span>
        <p>${escapeHtml(linkedRecord?.result || note.result || "결과 없음")}</p>
      </div>
      <div class="tag-row">${renderAttachmentLinks(linkedRecord?.attachments || [])}</div>
    </article>
  `;
}

function renderGroupedRecords(records, groupBy) {
  itemCount.textContent = `${records.length}개 노트`;
  mainContent.className = "grouped-records";

  if (records.length === 0) {
    mainContent.innerHTML = '<div class="empty-state">조건에 맞는 실험 기록이 없습니다.</div>';
    return;
  }

  const groups = groupRecords(records, groupBy);
  mainContent.innerHTML = Object.entries(groups).map(([groupName, groupItems], index) => {
    const summary = calculateGroupSummary(groupItems);
    return `
      <details class="record-group" ${index === 0 ? "open" : ""}>
        <summary>
          <div>
            <h3>${escapeHtml(groupName)}</h3>
            <p>${summary.count}개 기록 | 최신 날짜: ${summary.latestDate} | 평균 결과: ${summary.averageResult}</p>
          </div>
        </summary>
        <div class="group-card-list">
          ${groupItems.map(renderRecordCard).join("")}
        </div>
      </details>
    `;
  }).join("");
}

function renderSummary() {
  const completed = notes.filter((note) => note.status === "완료").length;
  const inProgress = notes.filter((note) => note.status === "진행 중").length;

  summaryGrid.innerHTML = `
    <article class="summary-card"><span>전체 노트</span><strong>${notes.length}</strong></article>
    <article class="summary-card"><span>연구 프로젝트</span><strong>${projects.length}</strong></article>
    <article class="summary-card"><span>실험 / 결과</span><strong>${experimentRecords.length} / ${resultRecords.length}</strong></article>
    <article class="summary-card"><span>문헌 / 템플릿</span><strong>${literatureRecords.length} / ${templates.length}</strong></article>
  `;
}

function renderCards() {
  if (recordViewMode.value !== "all") {
    renderGroupedRecords(getFilteredNotes(), recordViewMode.value);
    return;
  }

  const filteredNotes = getFilteredNotes();
  itemCount.textContent = `${filteredNotes.length}개 노트`;
  mainContent.className = "card-grid";

  if (filteredNotes.length === 0) {
    mainContent.innerHTML = '<div class="empty-state">조건에 맞는 연구 노트가 없습니다.</div>';
    return;
  }

  mainContent.innerHTML = filteredNotes.map((note) => {
    const literatureTags = splitTags(note.literature).map((tag) => `<span class="mini-tag">${escapeHtml(tag)}</span>`).join("");
    const keywordTags = splitTags(note.keywords).map((tag) => `<span class="mini-tag">${escapeHtml(tag)}</span>`).join("");
  const changes = note.experimentRecordId
      ? experimentRecords.find((record) => record.id === note.experimentRecordId)?.changedVariables || []
      : [];

    return `
      <article class="note-card">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(note.title)}</h3>
            <div class="meta">${escapeHtml(note.project || "프로젝트 없음")} · ${formatDate(note.date)}</div>
          </div>
          <span class="status-tag ${statusClass(note.status)}">${escapeHtml(note.status)}</span>
        </div>
        <div class="card-field"><span>목표</span><p>${escapeHtml(note.goals || "목표 없음")}</p></div>
        ${note.situationTemplateName ? `<div class="card-field"><span>사용 템플릿</span><p>${escapeHtml(note.situationTemplateName)}</p></div>` : ""}
        <div class="card-field"><span>메모</span><p>${escapeHtml(note.memo || "메모 없음")}</p></div>
        ${note.templateName ? `<div class="card-field"><span>기본 조건 템플릿</span><p>${escapeHtml(note.templateName)} · 변경 ${changes.length}개</p></div>` : ""}
        ${note.result ? `<div class="card-field"><span>결과</span><p>${escapeHtml(note.result)}</p></div>` : ""}
        <div class="card-field"><span>관련 문헌</span><div class="tag-row">${literatureTags || '<span class="mini-tag">없음</span>'}</div></div>
        <div class="card-field"><span>관련 키워드</span><div class="tag-row">${keywordTags || '<span class="mini-tag">없음</span>'}</div></div>
        <div class="form-actions">
          <button class="small-button" type="button" data-edit-note="${note.id}">수정</button>
          <button class="small-button" type="button" data-delete-note="${note.id}">삭제</button>
          <button class="small-button" type="button" data-duplicate-note="${note.id}">이전 실험 복제</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderVariableRowsForTemplate(container, variables = starterVariables.map(([name, value]) => ({ name, value }))) {
  container.innerHTML = "";
  variables.forEach((variable) => container.appendChild(createVariableRow(variable)));

  const addButton = document.createElement("button");
  addButton.className = "ghost-button full";
  addButton.type = "button";
  addButton.textContent = "변수 추가";
  addButton.addEventListener("click", () => {
    container.insertBefore(createVariableRow({}), addButton);
  });
  container.appendChild(addButton);
}

function renderProjectView() {
  itemCount.textContent = `${projects.length}개 프로젝트`;
  mainContent.className = "card-grid";
  const editingProject = projects.find((project) => String(project.id) === String(editingProjectId));

  mainContent.innerHTML = `
    <article class="template-form-card">
      <h3>${editingProject ? "연구 프로젝트 수정" : "연구 프로젝트 추가"}</h3>
      <form id="projectForm" class="template-form">
        <label><span>프로젝트명</span><input name="title" type="text" value="${escapeHtml(editingProject?.title || "")}" required></label>
        <label><span>연구 분야</span><input name="field" type="text" value="${escapeHtml(editingProject?.field || "")}" placeholder="재료, 화학, AI..."></label>
        <label class="full"><span>연구 목표</span><textarea name="objective" rows="3">${escapeHtml(editingProject?.objective || "")}</textarea></label>
        <label><span>시작일</span><input name="startDate" type="date" value="${escapeHtml(editingProject?.startDate || "")}"></label>
        <label>
          <span>상태</span>
          <select name="status">
            <option ${normalizeProjectStatus(editingProject?.status) === "계획 중" ? "selected" : ""}>계획 중</option>
            <option ${!editingProject || normalizeProjectStatus(editingProject.status) === "진행 중" ? "selected" : ""}>진행 중</option>
            <option ${normalizeProjectStatus(editingProject?.status) === "완료" ? "selected" : ""}>완료</option>
          </select>
        </label>
        <label><span>키워드 / 태그</span><input name="keywords" type="text" value="${escapeHtml(editingProject?.keywords || "")}" placeholder="촉매, 수율"></label>
        <label class="full"><span>짧은 메모</span><textarea name="memo" rows="3">${escapeHtml(editingProject?.memo || "")}</textarea></label>
        <div class="form-actions full">
          ${editingProject ? '<button class="ghost-button" type="button" data-cancel-project-edit>취소</button>' : ""}
          <button class="primary-button" type="submit">${editingProject ? "수정 저장" : "프로젝트 저장"}</button>
        </div>
      </form>
    </article>
    ${projects.map((project) => `
      <article class="note-card">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(project.title)}</h3>
            <div class="meta">${escapeHtml(project.field || "분야 없음")} · ${formatDate(project.startDate)}</div>
          </div>
          <div class="form-actions">
            <button class="small-button" type="button" data-edit-project="${project.id}">수정</button>
            <button class="small-button" type="button" data-delete-project="${project.id}">삭제</button>
          </div>
        </div>
        <span class="status-tag ${statusClass(project.status)}">${escapeHtml(normalizeProjectStatus(project.status))}</span>
        <div class="card-field"><span>연구 목표</span><p>${escapeHtml(project.objective || "목표 없음")}</p></div>
        <div class="card-field"><span>키워드</span><div class="tag-row">${splitTags(project.keywords).map((tag) => `<span class="mini-tag">${escapeHtml(tag)}</span>`).join("") || '<span class="mini-tag">없음</span>'}</div></div>
        <div class="card-field"><span>메모</span><p>${escapeHtml(project.memo || "메모 없음")}</p></div>
      </article>
    `).join("") || '<div class="empty-state">저장된 프로젝트가 없습니다.</div>'}
  `;

  document.querySelector("#projectForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (editingProject) {
      const previousTitle = editingProject.title;
      Object.assign(editingProject, values);
      if (previousTitle && previousTitle !== values.title) {
        notes.forEach((note) => {
          if (note.project === previousTitle) {
            note.project = values.title;
          }
        });
        experimentRecords.forEach((record) => {
          if (record.project === previousTitle) {
            record.project = values.title;
          }
        });
        literatureRecords.forEach((item) => {
          if (item.project === previousTitle) {
            item.project = values.title;
          }
        });
        resultRecords.forEach((item) => {
          if (item.project === previousTitle) {
            item.project = values.title;
          }
        });
      }
      editingProjectId = null;
    } else {
      projects.push({ id: Date.now(), ...values });
    }
    saveAll();
    fillProjectSelect();
    render();
  });
}

function normalizeDoi(value) {
  return String(value || "")
    .trim()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .replace(/^doi:\s*/i, "")
    .trim();
}

function getCrossrefYear(message) {
  const dateParts = message?.publishedPrint?.["date-parts"]
    || message?.publishedOnline?.["date-parts"]
    || message?.issued?.["date-parts"];
  return dateParts?.[0]?.[0] || "";
}

function formatCrossrefAuthors(authors = []) {
  return authors
    .map((author) => [author.given, author.family].filter(Boolean).join(" "))
    .filter(Boolean)
    .join(", ");
}

async function lookupDoiMetadata(form) {
  const status = document.querySelector("#doiLookupStatus");
  const rawValue = form.elements.url.value;
  const doi = normalizeDoi(rawValue);

  if (!doi) {
    status.textContent = "DOI를 먼저 입력해 주세요.";
    status.className = "lookup-status full is-error";
    return;
  }

  status.textContent = "DOI 정보를 불러오는 중입니다...";
  status.className = "lookup-status full";

  try {
    const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
    if (!response.ok) {
      throw new Error("Crossref lookup failed");
    }

    const data = await response.json();
    const message = data.message || {};
    form.elements.title.value = message.title?.[0] || form.elements.title.value;
    form.elements.authors.value = formatCrossrefAuthors(message.author) || form.elements.authors.value;
    form.elements.year.value = getCrossrefYear(message) || form.elements.year.value;
    form.elements.source.value = message["container-title"]?.[0] || message.publisher || form.elements.source.value;
    form.elements.url.value = message.URL || `https://doi.org/${doi}`;

    status.textContent = "문헌 정보를 자동 입력했습니다.";
    status.className = "lookup-status full is-success";
  } catch (error) {
    status.textContent = "DOI 정보를 찾지 못했습니다. DOI를 확인하거나 직접 입력해 주세요.";
    status.className = "lookup-status full is-error";
  }
}

function renderLiteratureView() {
  const query = sessionStorage.getItem("lablogLiteratureSearch") || "";
  const normalizedQuery = query.toLowerCase();
  const editingLiterature = literatureRecords.find((item) => String(item.id) === String(editingLiteratureId));
  const filteredLiterature = literatureRecords.filter((item) => {
    return [item.title, item.authors, item.keywords, item.project]
      .some((value) => String(value || "").toLowerCase().includes(normalizedQuery));
  });

  itemCount.textContent = `${filteredLiterature.length}개 문헌`;
  mainContent.className = "card-grid";
  mainContent.innerHTML = `
    <article class="template-form-card">
      <h3>${editingLiterature ? "문헌 기록 수정" : "문헌 기록 추가"}</h3>
      <form id="literatureForm" class="template-form">
        <label class="full"><span>논문 제목</span><input name="title" type="text" value="${escapeHtml(editingLiterature?.title || "")}" required></label>
        <label><span>저자</span><input name="authors" type="text" value="${escapeHtml(editingLiterature?.authors || "")}"></label>
        <label><span>연도</span><input name="year" type="number" min="1900" max="2100" value="${escapeHtml(editingLiterature?.year || "")}"></label>
        <label><span>저널 / 출처</span><input name="source" type="text" value="${escapeHtml(editingLiterature?.source || "")}"></label>
        <label>
          <span>DOI 또는 URL</span>
          <input name="url" type="text" value="${escapeHtml(editingLiterature?.url || "")}" placeholder="10.1000/example 또는 https://...">
          <small class="field-help">DOI 또는 doi.org 링크를 붙여넣고 아래의 DOI 정보 불러오기 버튼을 눌러주세요.</small>
        </label>
        <label>
          <span>관련 프로젝트</span>
          <select name="project">
            ${renderProjectOptions(editingLiterature?.project || "")}
          </select>
        </label>
        <div class="doi-actions">
          <button class="ghost-button" type="button" id="doiLookupButton">DOI 정보 불러오기</button>
        </div>
        <label class="full"><span>키워드</span><input name="keywords" type="text" value="${escapeHtml(editingLiterature?.keywords || "")}"></label>
        <label class="full"><span>짧은 요약</span><textarea name="summary" rows="3">${escapeHtml(editingLiterature?.summary || "")}</textarea></label>
        <label class="full"><span>개인 노트</span><textarea name="notes" rows="3">${escapeHtml(editingLiterature?.notes || "")}</textarea></label>
        <div id="doiLookupStatus" class="lookup-status full"></div>
        <div class="form-actions full">
          ${editingLiterature ? '<button class="ghost-button" type="button" data-cancel-literature-edit>취소</button>' : ""}
          <button class="primary-button" type="submit">${editingLiterature ? "수정 저장" : "문헌 저장"}</button>
        </div>
      </form>
    </article>
    <article class="filter-card full">
      <label>
        문헌 검색
        <input id="literatureSearch" type="search" value="${escapeHtml(query)}" placeholder="제목, 저자, 키워드, 프로젝트 검색">
      </label>
    </article>
    ${filteredLiterature.map((item) => `
      <article class="note-card">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <div class="meta">${escapeHtml(item.authors || "저자 없음")} · ${escapeHtml(item.year || "연도 없음")}</div>
          </div>
          <div class="form-actions">
            <button class="small-button" type="button" data-edit-literature="${item.id}">수정</button>
            <button class="small-button" type="button" data-delete-literature="${item.id}">삭제</button>
          </div>
        </div>
        <div class="card-field"><span>출처</span><p>${escapeHtml(item.source || "출처 없음")}</p></div>
        <div class="card-field"><span>DOI / URL</span><p>${item.url ? `<a class="text-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.url)}</a>` : "링크 없음"}</p></div>
        <div class="card-field"><span>관련 프로젝트</span><p>${escapeHtml(item.project || "프로젝트 없음")}</p></div>
        <div class="card-field"><span>키워드</span><div class="tag-row">${splitTags(item.keywords).map((tag) => `<span class="mini-tag">${escapeHtml(tag)}</span>`).join("") || '<span class="mini-tag">없음</span>'}</div></div>
        <div class="card-field"><span>요약</span><p>${escapeHtml(item.summary || "요약 없음")}</p></div>
        <div class="card-field"><span>노트</span><p>${escapeHtml(item.notes || "노트 없음")}</p></div>
      </article>
    `).join("") || '<div class="empty-state">저장된 문헌이 없습니다.</div>'}
  `;

  document.querySelector("#literatureSearch").addEventListener("input", (event) => {
    sessionStorage.setItem("lablogLiteratureSearch", event.target.value);
    render();
  });

  document.querySelector("#doiLookupButton").addEventListener("click", () => {
    lookupDoiMetadata(document.querySelector("#literatureForm"));
  });

  document.querySelector("#literatureForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (editingLiterature) {
      Object.assign(editingLiterature, values);
      editingLiteratureId = null;
    } else {
      literatureRecords.push({ id: Date.now(), ...values });
    }
    saveAll();
    render();
  });
}

function renderGuideView() {
  itemCount.textContent = `${situationTemplates.length}개 템플릿`;
  mainContent.className = "card-grid";
  mainContent.innerHTML = situationTemplates.map((template) => `
    <article class="note-card guide-card ${noteForm.elements.situationTemplateName?.value === template.name ? "is-selected-template" : ""}">
      <div>
        <p class="eyebrow">상황별 템플릿</p>
        <h3>${escapeHtml(template.name)}</h3>
      </div>
      <div class="card-field">
        <span>설명</span>
        <p>${escapeHtml(template.description)}</p>
      </div>
      <div class="card-field">
        <span>추천 상황</span>
        <p>${escapeHtml(template.useCase)}</p>
      </div>
      <div class="card-field">
        <span>주요 항목</span>
        <div class="tag-row">
          ${template.fields.slice(0, 7).map((field) => `<span class="mini-tag">${escapeHtml(field)}</span>`).join("")}
        </div>
      </div>
      <button class="small-button" type="button" data-use-situation-template="${escapeHtml(template.name)}">이 템플릿 사용하기</button>
    </article>
  `).join("");
}

function renderTemplateView() {
  itemCount.textContent = `${templates.length}개 템플릿`;
  mainContent.className = "card-grid";
  mainContent.innerHTML = `
    <article class="template-form-card">
      <h3>기본 실험 조건 템플릿 만들기</h3>
      <form id="templateForm" class="template-form">
        <label class="full">
          템플릿 이름
          <input name="name" type="text" placeholder="기본 합성 조건" required>
        </label>
        <div id="templateVariableRows" class="template-variable-list full"></div>
        <div class="form-actions full">
          <button class="primary-button" type="submit">템플릿 저장</button>
        </div>
      </form>
    </article>
    ${templates.map((template) => `
      <article class="note-card">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(template.name)}</h3>
            <div class="meta">${template.variables.length}개 변수</div>
          </div>
          <button class="small-button" type="button" data-delete-template="${template.id}">삭제</button>
        </div>
        <div class="card-field">
          <span>기본 변수</span>
          <p>${template.variables.slice(0, 6).map((item) => `${escapeHtml(item.name)}: ${escapeHtml(item.value || "-")}`).join("<br>")}</p>
        </div>
      </article>
    `).join("")}
  `;

  const templateForm = document.querySelector("#templateForm");
  const templateVariableRows = document.querySelector("#templateVariableRows");
  renderVariableRowsForTemplate(templateVariableRows);

  templateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const variables = getConditionListFromRows(templateVariableRows);
    if (variables.length === 0) {
      alert("변수를 하나 이상 추가해 주세요.");
      return;
    }

    templates.push({
      id: Date.now(),
      name: templateForm.elements.name.value.trim(),
      variables
    });
    saveAll();
    fillTemplateSelect();
    render();
  });
}

function renderComparisonView() {
  const sortedRecords = experimentRecords.slice().sort((a, b) => sortSelect.value === "oldest"
    ? String(a.date || "").localeCompare(String(b.date || ""))
    : String(b.date || "").localeCompare(String(a.date || "")));

  itemCount.textContent = `${sortedRecords.length}개 실험`;
  mainContent.className = "card-grid";

  if (sortedRecords.length === 0) {
    mainContent.innerHTML = '<div class="empty-state">비교할 실험 기록이 없습니다. 새 연구 노트에서 템플릿을 선택해 실험 기록을 저장하세요.</div>';
    return;
  }

  mainContent.innerHTML = `
    <div class="comparison-wrap">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>실험 제목</th>
            <th>변경 변수</th>
            <th>최종 조건</th>
            <th>결과 요약</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          ${sortedRecords.map((record) => `
            <tr>
              <td>${formatDate(record.date)}</td>
              <td><strong>${escapeHtml(record.title)}</strong><br><span class="meta">${escapeHtml(record.situationTemplateName || record.templateName || "템플릿 없음")}</span></td>
              <td>${renderChangedVariables(record.changedVariables)}</td>
              <td>${renderFinalConditions(record.finalConditions)}</td>
              <td>
                ${escapeHtml(record.result || "결과 없음")}
                <div class="tag-row table-files">${renderAttachmentLinks(record.attachments)}</div>
              </td>
              <td><button class="small-button" type="button" data-duplicate-record="${record.id}">복제</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function getResultArchiveItems() {
  const query = sessionStorage.getItem("lablogResultSearch") || "";
  const normalizedQuery = query.toLowerCase();
  const standaloneItems = resultRecords.map((result) => ({
    type: "standalone",
    id: result.id,
    title: result.title,
    project: result.project || "미분류",
    date: result.date,
    mainVariable: result.mainVariable || "주요 변수 없음",
    resultText: `${result.value || "-"} ${result.unit || ""}`.trim(),
    numericResult: Number.parseFloat(result.value),
    summary: result.summary,
    interpretation: result.interpretation,
    nextAction: result.nextAction,
    source: result
  }));
  const experimentItems = experimentRecords.map((record) => ({
    type: "experiment",
    id: record.id,
    noteId: record.noteId,
    title: record.title,
    project: record.project || "미분류",
    date: record.date,
    mainVariable: record.changedVariables?.[0]?.name || "변경 변수 없음",
    resultText: record.result || "결과 요약 없음",
    numericResult: Number.parseFloat(record.result),
    summary: record.result,
    memo: record.memo,
    changedVariables: record.changedVariables || [],
    attachments: record.attachments || [],
    templateName: record.templateName,
    situationTemplateName: record.situationTemplateName,
    source: record
  }));

  return [...standaloneItems, ...experimentItems]
    .filter((item) => {
      return [item.project, item.mainVariable, item.title, item.summary, item.resultText]
        .some((value) => String(value || "").toLowerCase().includes(normalizedQuery));
    })
    .sort((a, b) => sortSelect.value === "oldest"
      ? String(a.date || "").localeCompare(String(b.date || ""))
      : String(b.date || "").localeCompare(String(a.date || "")));
}

function groupResultArchiveItems(items, groupBy) {
  return items.reduce((groups, item) => {
    let groupName = "미분류";

    if (groupBy === "project") {
      groupName = item.project || "미분류";
    }

    if (groupBy === "title") {
      groupName = item.title || "제목 없는 결과";
    }

    if (groupBy === "mainVariable") {
      groupName = item.mainVariable || "변경 변수 없음";
    }

    if (!groups[groupName]) {
      groups[groupName] = [];
    }

    groups[groupName].push(item);
    return groups;
  }, {});
}

function calculateResultGroupSummary(items) {
  const numericResults = items
    .map((item) => item.numericResult)
    .filter((value) => Number.isFinite(value));
  const latestDate = items
    .map((item) => item.date)
    .filter(Boolean)
    .sort()
    .at(-1);

  return {
    count: items.length,
    latestDate: latestDate ? formatDate(latestDate) : "날짜 없음",
    averageResult: numericResults.length
      ? (numericResults.reduce((sum, value) => sum + value, 0) / numericResults.length).toFixed(2)
      : "해당 없음"
  };
}

function renderResultArchiveCard(item) {
  if (item.type === "standalone") {
    return `
      <article class="note-card result-card">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <div class="meta">${formatDate(item.date)} · ${escapeHtml(item.project || "프로젝트 없음")}</div>
          </div>
          <div class="form-actions">
            <button class="small-button" type="button" data-edit-result="${item.id}">수정</button>
            <button class="small-button" type="button" data-delete-result="${item.id}">삭제</button>
          </div>
        </div>
        <div class="card-field"><span>주요 변수</span><p>${escapeHtml(item.mainVariable || "변수 없음")}</p></div>
        <div class="card-field"><span>결과값</span><p>${escapeHtml(item.resultText || "-")}</p></div>
        <div class="card-field"><span>요약</span><p>${escapeHtml(item.summary || "요약 없음")}</p></div>
        <div class="card-field"><span>해석</span><p>${escapeHtml(item.interpretation || "해석 없음")}</p></div>
        <div class="card-field"><span>다음 액션</span><p>${escapeHtml(item.nextAction || "다음 액션 없음")}</p></div>
      </article>
    `;
  }

  return `
    <article class="note-card result-card">
      <div class="card-top">
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <div class="meta">실험 기록 · ${formatDate(item.date)} · ${escapeHtml(item.situationTemplateName || item.templateName || "템플릿 없음")}</div>
        </div>
        <div class="form-actions">
          <button class="small-button" type="button" data-edit-note="${item.noteId}">수정</button>
          <button class="small-button" type="button" data-delete-experiment-result="${item.id}">삭제</button>
        </div>
      </div>
      <div class="card-field"><span>결과 요약</span><p>${escapeHtml(item.resultText || "결과 요약 없음")}</p></div>
      <div class="card-field"><span>변경 변수</span><div class="tag-row">${renderChangedVariables(item.changedVariables)}</div></div>
      <div class="card-field"><span>파일</span><div class="tag-row">${renderAttachmentLinks(item.attachments)}</div></div>
      <div class="card-field"><span>메모</span><p>${escapeHtml(item.memo || "메모 없음")}</p></div>
    </article>
  `;
}

function renderGroupedResultArchive(items, groupBy) {
  const groups = groupResultArchiveItems(items, groupBy);
  return Object.entries(groups).map(([groupName, groupItems], index) => {
    const summary = calculateResultGroupSummary(groupItems);
    return `
      <details class="record-group" ${index === 0 ? "open" : ""}>
        <summary>
          <div>
            <h3>${escapeHtml(groupName)}</h3>
            <p>${summary.count}개 결과 | 최신 날짜: ${summary.latestDate} | 평균 결과: ${summary.averageResult}</p>
          </div>
        </summary>
        <div class="group-card-list">
          ${groupItems.map(renderResultArchiveCard).join("")}
        </div>
      </details>
    `;
  }).join("");
}

function renderResultsArchiveView() {
  const query = sessionStorage.getItem("lablogResultSearch") || "";
  const archiveItems = getResultArchiveItems();
  const editingResult = resultRecords.find((item) => String(item.id) === String(editingResultId));

  itemCount.textContent = `${archiveItems.length}개 결과`;
  mainContent.className = recordViewMode.value === "all" ? "card-grid" : "grouped-records";

  mainContent.innerHTML = `
    ${editingResult ? `
      <article class="template-form-card">
        <h3>결과 기록 수정</h3>
        <form id="resultEditForm" class="template-form">
          <label class="full"><span>결과 제목</span><input name="title" type="text" value="${escapeHtml(editingResult.title || "")}" required></label>
          <label>
            <span>관련 프로젝트</span>
            <select name="project">${renderProjectOptions(editingResult.project || "")}</select>
          </label>
          <label><span>실험 날짜</span><input name="date" type="date" value="${escapeHtml(editingResult.date || "")}"></label>
          <label><span>주요 변수</span><input name="mainVariable" type="text" value="${escapeHtml(editingResult.mainVariable || "")}"></label>
          <label><span>결과값</span><input name="value" type="text" value="${escapeHtml(editingResult.value || "")}"></label>
          <label><span>단위</span><input name="unit" type="text" value="${escapeHtml(editingResult.unit || "")}"></label>
          <label class="full"><span>결과 요약</span><textarea name="summary" rows="3">${escapeHtml(editingResult.summary || "")}</textarea></label>
          <label class="full"><span>해석</span><textarea name="interpretation" rows="3">${escapeHtml(editingResult.interpretation || "")}</textarea></label>
          <label class="full"><span>다음 액션</span><textarea name="nextAction" rows="3">${escapeHtml(editingResult.nextAction || "")}</textarea></label>
          <div class="form-actions full">
            <button class="ghost-button" type="button" data-cancel-result-edit>취소</button>
            <button class="primary-button" type="submit">수정 저장</button>
          </div>
        </form>
      </article>
    ` : ""}
    <article class="filter-card full">
      <label>
        결과 검색
        <input id="resultSearch" type="search" value="${escapeHtml(query)}" placeholder="프로젝트명 또는 주요 변수 검색">
      </label>
    </article>
    ${archiveItems.length === 0
      ? '<div class="empty-state">저장된 결과가 없습니다.</div>'
      : recordViewMode.value === "all"
        ? archiveItems.map(renderResultArchiveCard).join("")
        : renderGroupedResultArchive(archiveItems, recordViewMode.value)}
  `;

  document.querySelector("#resultSearch").addEventListener("input", (event) => {
    sessionStorage.setItem("lablogResultSearch", event.target.value);
    render();
  });

  const resultEditForm = document.querySelector("#resultEditForm");
  if (resultEditForm) {
    resultEditForm.addEventListener("submit", (event) => {
      event.preventDefault();
      Object.assign(editingResult, Object.fromEntries(new FormData(event.currentTarget).entries()));
      editingResultId = null;
      saveAll();
      render();
    });
  }
}

function renderChangedVariables(changes) {
  if (!changes || changes.length === 0) {
    return '<span class="mini-tag">변경 없음</span>';
  }

  return changes.map((change) => `
    <div><span class="changed-tag">${escapeHtml(change.name)}</span> ${escapeHtml(change.from || "비어 있음")} -> ${escapeHtml(change.to || "비어 있음")}</div>
  `).join("");
}

function renderFinalConditions(conditions) {
  return normalizeConditionList(conditions)
    .filter((condition) => condition.name)
    .map((condition) => `<div><strong>${escapeHtml(condition.name)}:</strong> ${escapeHtml(condition.value || "-")}</div>`)
    .join("") || "조건 없음";
}

function render() {
  renderSummary();

  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === activeView));
  sidebarLinks.forEach((link) => link.classList.toggle("active", link.dataset.viewLink === activeView));
  openModalButton.style.display = activeView === "notes" ? "inline-flex" : "none";
  globalControls.hidden = !["notes", "comparison", "results"].includes(activeView);
  pageEyebrow.textContent = "연구 워크스페이스";

  if (activeView === "projects") {
    viewTitle.textContent = "연구 프로젝트";
    pageTitle.textContent = "연구 프로젝트";
    renderProjectView();
    return;
  }

  if (activeView === "notes") {
    viewTitle.textContent = "연구 노트";
    pageTitle.textContent = "연구 노트";
    renderCards();
    return;
  }

  if (activeView === "literature") {
    viewTitle.textContent = "문헌 아카이브";
    pageTitle.textContent = "문헌 아카이브";
    renderLiteratureView();
    return;
  }

  if (activeView === "guide") {
    viewTitle.textContent = "템플릿 라이브러리";
    pageTitle.textContent = "템플릿 라이브러리";
    renderGuideView();
    return;
  }

  if (activeView === "templates") {
    viewTitle.textContent = "실험 조건 템플릿";
    pageTitle.textContent = "실험 조건 템플릿";
    renderTemplateView();
    return;
  }

  if (activeView === "results") {
    viewTitle.textContent = "결과 아카이브";
    pageTitle.textContent = "결과 아카이브";
    renderResultsArchiveView();
    return;
  }

  viewTitle.textContent = "실험 비교";
  pageTitle.textContent = "실험 비교";
  renderComparisonView();
}

function setActiveView(view) {
  activeView = view;
  render();
}

function openModal(recordToDuplicate = null) {
  noteModal.classList.add("open");
  noteModal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = "새 실험 기록";
  noteForm.reset();
  noteForm.date.valueAsDate = new Date();

  if (recordToDuplicate) {
    modalTitle.textContent = "이전 실험 복제";
    noteForm.duplicateSourceId.value = recordToDuplicate.id;
    noteForm.title.value = `${recordToDuplicate.title} 복제본`;
    fillProjectSelect(recordToDuplicate.project || "");
    noteForm.goals.value = "이전 실험을 바탕으로 변경된 변수만 수정한다.";
    noteForm.result.value = recordToDuplicate.result || "";
    noteForm.memo.value = recordToDuplicate.memo || "";
    noteForm.templateId.value = recordToDuplicate.templateId || "";
    renderSituationTemplateFields(recordToDuplicate.situationTemplateName || "", recordToDuplicate.situationTemplateValues || {});
    renderExistingAttachments(recordToDuplicate.attachments || []);
    renderConditionRows(recordToDuplicate.finalConditions);
  } else {
    fillProjectSelect();
    renderSituationTemplateFields("");
    renderExistingAttachments([]);
    renderConditionRows([]);
  }

  updateChangedMarkers();
  noteForm.title.focus();
}

function openEditModal(note) {
  const record = note.experimentRecordId
    ? experimentRecords.find((item) => String(item.id) === String(note.experimentRecordId))
    : null;

  noteModal.classList.add("open");
  noteModal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = "연구 노트 수정";
  noteForm.reset();
  noteForm.editNoteId.value = note.id;
  noteForm.title.value = note.title || "";
  fillProjectSelect(note.project || "");
  noteForm.date.value = note.date || "";
  noteForm.goals.value = note.goals || "";
  noteForm.status.value = note.status || "진행 중";
  noteForm.templateId.value = note.templateId || "";
  noteForm.result.value = note.result || record?.result || "";
  noteForm.memo.value = note.memo || "";
  noteForm.literature.value = note.literature || "";
  noteForm.keywords.value = note.keywords || "";
  renderSituationTemplateFields(note.situationTemplateName || record?.situationTemplateName || "", note.situationTemplateValues || record?.situationTemplateValues || {});
  renderExistingAttachments(record?.attachments || []);
  renderConditionRows(record?.finalConditions || getTemplateById(note.templateId)?.variables || []);
  updateChangedMarkers();
  noteForm.title.focus();
}

function openDuplicateNoteModal(note) {
  const record = note.experimentRecordId
    ? experimentRecords.find((item) => String(item.id) === String(note.experimentRecordId))
    : null;

  noteModal.classList.add("open");
  noteModal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = "이전 실험 복제";
  noteForm.reset();
  noteForm.duplicateSourceId.value = record?.id || "";
  noteForm.title.value = `${note.title || "제목 없음"} 복제본`;
  fillProjectSelect(note.project || "");
  noteForm.date.valueAsDate = new Date();
  noteForm.goals.value = note.goals || "";
  noteForm.status.value = note.status || "진행 중";
  noteForm.templateId.value = note.templateId || "";
  noteForm.result.value = note.result || record?.result || "";
  noteForm.memo.value = note.memo || record?.memo || "";
  noteForm.literature.value = note.literature || "";
  noteForm.keywords.value = note.keywords || "";
  renderSituationTemplateFields(note.situationTemplateName || record?.situationTemplateName || "", note.situationTemplateValues || record?.situationTemplateValues || {});
  renderExistingAttachments(record?.attachments || []);
  renderConditionRows(record?.finalConditions || getTemplateById(note.templateId)?.variables || []);
  updateChangedMarkers();
  noteForm.title.focus();
}

function closeModal() {
  noteModal.classList.remove("open");
  noteModal.setAttribute("aria-hidden", "true");
  modalTitle.textContent = "새 실험 기록";
  noteForm.reset();
  fillProjectSelect();
  renderSituationTemplateFields("");
  renderExistingAttachments([]);
  renderConditionRows([]);
}

openModalButton.addEventListener("click", () => openModal());

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

templateSelect.addEventListener("change", () => {
  const template = getTemplateById(templateSelect.value);
  renderConditionRows(template?.variables || []);
});

situationTemplateSelect.addEventListener("change", () => {
  const template = getSituationTemplateByName(situationTemplateSelect.value);
  if (template) {
    noteForm.goals.value = template.useCase;
    noteForm.memo.value = `${template.name}이 적용되었습니다. 필요한 항목을 채워 실험 기록을 완성하세요.`;
  }
  renderSituationTemplateFields(situationTemplateSelect.value);
});

noteForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(noteForm).entries());
  const template = getTemplateById(values.templateId);
  const originalConditions = template ? template.variables : [];
  const finalConditions = getConditionListFromForm();
  const changedVariables = template ? getChangedVariables(originalConditions, finalConditions) : [];
  const editingNote = notes.find((note) => String(note.id) === String(values.editNoteId));
  const id = editingNote ? editingNote.id : Date.now();
  let experimentRecordId = editingNote?.experimentRecordId || null;
  const existingRecord = experimentRecords.find((record) => String(record.id) === String(experimentRecordId));
  const sourceRecord = values.duplicateSourceId
    ? experimentRecords.find((record) => String(record.id) === String(values.duplicateSourceId))
    : null;
  const newAttachments = await readAttachmentFiles(noteForm.elements.resultFiles.files);
  const attachments = [...(existingRecord?.attachments || sourceRecord?.attachments || []), ...newAttachments];
  const situationTemplateName = values.situationTemplateName || "";
  const situationTemplateValues = getSituationTemplateValues();

  if (template || situationTemplateName) {
    const recordData = {
      id: existingRecord ? existingRecord.id : id,
      noteId: id,
      title: values.title,
      project: values.project,
      date: values.date,
      result: values.result,
      memo: values.memo,
      templateId: template ? template.id : "",
      templateName: template ? template.name : "",
      situationTemplateName,
      situationTemplateValues,
      originalDefaults: originalConditions,
      changedVariables,
      finalConditions,
      attachments
    };

    if (existingRecord) {
      Object.assign(existingRecord, recordData);
      experimentRecordId = existingRecord.id;
    } else {
      experimentRecords.push(recordData);
      experimentRecordId = recordData.id;
    }
  } else if (experimentRecordId) {
    experimentRecords = experimentRecords.filter((record) => String(record.id) !== String(experimentRecordId));
    experimentRecordId = null;
  }

  const noteData = {
    id,
    title: values.title,
    project: values.project,
    date: values.date,
    goals: values.goals,
    status: values.status,
    memo: values.memo,
    literature: values.literature,
    keywords: values.keywords,
    result: values.result,
    attachmentCount: attachments.length,
    templateId: template ? template.id : "",
    templateName: template ? template.name : "",
    situationTemplateName,
    situationTemplateValues,
    experimentRecordId
  };

  if (editingNote) {
    Object.assign(editingNote, noteData);
  } else {
    notes.push(noteData);
  }

  saveAll();
  closeModal();
  render();
});

[searchInput, statusFilter, sortSelect, recordViewMode].forEach((control) => {
  control.addEventListener("input", render);
  control.addEventListener("change", render);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveView(tab.dataset.view);
  });
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveView(link.dataset.viewLink);
  });
});

mainContent.addEventListener("click", (event) => {
  const useSituationTemplateButton = event.target.closest("[data-use-situation-template]");
  if (useSituationTemplateButton) {
    applySituationTemplate(useSituationTemplateButton.dataset.useSituationTemplate);
    return;
  }

  const editButton = event.target.closest("[data-edit-note]");
  if (editButton) {
    const note = notes.find((item) => String(item.id) === String(editButton.dataset.editNote));
    if (note) {
      openEditModal(note);
    }
    return;
  }

  const deleteNoteButton = event.target.closest("[data-delete-note]");
  if (deleteNoteButton) {
    if (!confirm("정말 이 연구노트를 삭제하시겠습니까? 연결된 실험 기록도 함께 삭제되며 되돌릴 수 없습니다.")) {
      return;
    }
    const note = notes.find((item) => String(item.id) === String(deleteNoteButton.dataset.deleteNote));
    if (note?.experimentRecordId) {
      experimentRecords = experimentRecords.filter((record) => String(record.id) !== String(note.experimentRecordId));
    }
    notes = notes.filter((item) => String(item.id) !== String(deleteNoteButton.dataset.deleteNote));
    saveAll();
    render();
    return;
  }

  const duplicateNoteButton = event.target.closest("[data-duplicate-note]");
  if (duplicateNoteButton) {
    const note = notes.find((item) => String(item.id) === String(duplicateNoteButton.dataset.duplicateNote));
    if (note) {
      openDuplicateNoteModal(note);
    }
    return;
  }

  const duplicateButton = event.target.closest("[data-duplicate-record]");
  if (duplicateButton) {
    const record = experimentRecords.find((item) => String(item.id) === String(duplicateButton.dataset.duplicateRecord));
    if (record) {
      openModal(record);
    }
    return;
  }

  const deleteButton = event.target.closest("[data-delete-template]");
  if (deleteButton) {
    if (!confirm("정말 이 실험 조건 템플릿을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      return;
    }
    templates = templates.filter((template) => String(template.id) !== String(deleteButton.dataset.deleteTemplate));
    saveAll();
    fillTemplateSelect();
    render();
    return;
  }

  const deleteProjectButton = event.target.closest("[data-delete-project]");
  if (deleteProjectButton) {
    if (!confirm("정말 이 연구 프로젝트를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      return;
    }
    projects = projects.filter((project) => String(project.id) !== String(deleteProjectButton.dataset.deleteProject));
    if (String(editingProjectId) === String(deleteProjectButton.dataset.deleteProject)) {
      editingProjectId = null;
    }
    saveAll();
    fillProjectSelect();
    render();
    return;
  }

  const editProjectButton = event.target.closest("[data-edit-project]");
  if (editProjectButton) {
    editingProjectId = editProjectButton.dataset.editProject;
    render();
    return;
  }

  const cancelProjectEditButton = event.target.closest("[data-cancel-project-edit]");
  if (cancelProjectEditButton) {
    editingProjectId = null;
    render();
    return;
  }

  const deleteLiteratureButton = event.target.closest("[data-delete-literature]");
  if (deleteLiteratureButton) {
    if (!confirm("정말 이 문헌 기록을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      return;
    }
    literatureRecords = literatureRecords.filter((item) => String(item.id) !== String(deleteLiteratureButton.dataset.deleteLiterature));
    if (String(editingLiteratureId) === String(deleteLiteratureButton.dataset.deleteLiterature)) {
      editingLiteratureId = null;
    }
    saveAll();
    render();
    return;
  }

  const editLiteratureButton = event.target.closest("[data-edit-literature]");
  if (editLiteratureButton) {
    editingLiteratureId = editLiteratureButton.dataset.editLiterature;
    render();
    return;
  }

  const cancelLiteratureEditButton = event.target.closest("[data-cancel-literature-edit]");
  if (cancelLiteratureEditButton) {
    editingLiteratureId = null;
    render();
    return;
  }

  const deleteResultButton = event.target.closest("[data-delete-result]");
  if (deleteResultButton) {
    if (!confirm("정말 이 결과 기록을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      return;
    }
    resultRecords = resultRecords.filter((item) => String(item.id) !== String(deleteResultButton.dataset.deleteResult));
    if (String(editingResultId) === String(deleteResultButton.dataset.deleteResult)) {
      editingResultId = null;
    }
    saveAll();
    render();
    return;
  }

  const editResultButton = event.target.closest("[data-edit-result]");
  if (editResultButton) {
    editingResultId = editResultButton.dataset.editResult;
    render();
    return;
  }

  const cancelResultEditButton = event.target.closest("[data-cancel-result-edit]");
  if (cancelResultEditButton) {
    editingResultId = null;
    render();
    return;
  }

  const deleteExperimentResultButton = event.target.closest("[data-delete-experiment-result]");
  if (deleteExperimentResultButton) {
    if (!confirm("정말 이 실험 결과를 삭제하시겠습니까? 연결된 연구노트도 함께 삭제되며 되돌릴 수 없습니다.")) {
      return;
    }
    const record = experimentRecords.find((item) => String(item.id) === String(deleteExperimentResultButton.dataset.deleteExperimentResult));
    if (record?.noteId) {
      notes = notes.filter((note) => String(note.id) !== String(record.noteId));
    }
    experimentRecords = experimentRecords.filter((item) => String(item.id) !== String(deleteExperimentResultButton.dataset.deleteExperimentResult));
    saveAll();
    render();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && noteModal.classList.contains("open")) {
    closeModal();
  }
});

renderConditionRows([]);
fillTemplateSelect();
fillProjectSelect();
fillSituationTemplateSelect();
saveAll();
render();
