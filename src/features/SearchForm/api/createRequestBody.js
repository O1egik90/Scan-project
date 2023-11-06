export function createRequestBody(formData) {
    if (!formData) return;
    const requestBody = {
        issueDateInterval: {
            startDate: formData.start,
            endDate: formData.end,
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: 'company',
                        inn: formData.inn,
                        maxFullness: formData.checkboxes.maxCompleteness,
                        inBusinessNews: formData.checkboxes.businessContext,
                    },
                ],
                onlyMainRole: formData.checkboxes.mainRole,
                tonality: formData.tonality,
                onlyWithRiskFactors: formData.checkboxes.riskFactors,
            },
        },
        attributeFilters: {
            excludeTechNews: formData.checkboxes.techNews,
            excludeAnnouncements: formData.checkboxes.announcements,
            excludeDigests: formData.checkboxes.techNews,
        },
        similarMode: 'duplicates',
        limit: formData.limit,
        sortType: 'sourceInfluence',
        sortDirectionType: 'desc',
        intervalType: 'month',
        histogramTypes: ['totalDocuments', 'riskFactors'],
    };
    return requestBody;
}
